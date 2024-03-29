var app = getApp()
var api = require('../../utils/api.js')

Page({
    data: {
        resultVisible: false,
        DocContent: '',
        curLength: 0,
        result: [],
        exportForm: {
            courtName: '',
            name: '',
            number: '',
            data: '',
            member: [
                {
                    status: '审判长',
                    name: '',
                }
            ]
        },
        exportFormVisible: false,
        exportLoading: false,
        contentEditable: true,
        graph: null,
        graphData: {
            nodes: [],
            edges: [],
        },
        exportTypes: ['pdf', 'word'],
    },

    check(data, callback) {
        api.checkAPI(data, {
            success(res) {
                var resultJ = res
                if (resultJ == null) {
                    this.result = []
                }
                this.result = resultJ
                if (resultJ.success) {
                    wx.hideLoading();
                } else {
                    wx.hideLoading();
                    wx.showModal({
                        content: resultJ.message,
                        showCancel: false,
                        confirmText: '确定'
                    })
                }
                callback.success(resultJ)
            }
        })
    },

    onCheck: function (e) {
        var text = this.data.DocContent;
        var that = this
        this.check(text, {
            success(res) {
                var contentRes = [];
                contentRes = res.content.content;
                that.setData({
                    result: []
                })
                let re = that.data.result;
                for (let item in contentRes) {
                    if (contentRes[item].type !== 0) {
                        if (contentRes[item].type === 1){
                            contentRes[item].id = contentRes[item].id.substring(5);
                        }
                        else if (contentRes[item].type === 2){
                            contentRes[item].id = contentRes[item].id.substring(4);
                        }
                        else if (contentRes[item].type === 3){
                            contentRes[item].id = contentRes[item].id.substring(11);
                        }
                        re.push(contentRes[item]);
                    }
                }
                that.setData({
                    result: re,
                })
                console.log(that.data.result)
                that.setData({
                    resultVisible: true
                })
            }
        })
    },

    addMember() {
        this.exportForm.members.push({
            status: '',
            name: ''
        })
    },

    bindTextAreaBlur: function (e) {
        this.setData({
            DocContent: e.detail.value
        })
    },
    delMember(index) {
        this.exportForm.members.splice(index, 1)
    },


    onExportPdf() {
        this.exportLoading = true;
        this.exportPdf({
            ...this.exportForm,
            content: document.getElementById('textInput').innerText,
        }).then(res => {
            this.downloadDoc(res);
            this.exportForm = {
                courtName: '',
                name: '',
                number: '',
                date: '',
                members: [
                    {
                        status: '审判长',
                        name: ''
                    },
                ]
            }
            this.exportFormVisible = false;
        }).catch(err => {
            this.$message.error(err);
        }).finally(() => {
            this.exportLoading = false;
        })
    },
    onExportWord() {
        this.exportLoading = true;
        this.exportWord({
            ...this.exportForm,
            content: document.getElementById('textInput').innerText,
        }).then(res => {
            this.downloadDoc(res);
            this.exportForm = {
                courtName: '',
                name: '',
                number: '',
                date: '',
                members: [
                    {
                        status: '审判长',
                        name: ''
                    },
                ]
            }
            this.exportFormVisible = false;
        }).catch(err => {
            this.$message.error(err);
        }).finally(() => {
            this.exportLoading = false;
        })
    },
    initG6() {
        if (this.graph) {
            this.graph.destroy();
        }

        G6.registerNode(
            'card-node',
            {
                drawShape: function drawShape(cfg, group) {
                    const color = COLOR_TBL[cfg.textType];
                    const r = 5;
                    const shape = group.addShape('rect', {
                        attrs: {
                            x: 0,
                            y: 0,
                            width: 420,
                            height: 20 + (cfg.value.length + cfg.warning) * 20,
                            stroke: color,
                            radius: r,
                        },
                        name: 'main-box',
                    });

                    group.addShape('rect', {
                        attrs: {
                            x: 0,
                            y: 0,
                            width: 420,
                            height: 20,
                            fill: color,
                            radius: [r, r, 0, 0],
                        },
                        name: 'title-box',
                    });

                    // title text
                    group.addShape('text', {
                        attrs: {
                            textBaseline: 'top',
                            y: 5,
                            x: 5,
                            lineHeight: 20,
                            text: cfg.title,
                            fill: '#fff',
                        },
                        name: 'title',
                    });

                    // value text
                    group.addShape('text', {
                        attrs: {
                            textBaseline: 'top',
                            y: 25,
                            x: 5,
                            lineHeight: 20,
                            text: cfg.value.join('\n'),
                            fill: '#000000',
                            fontSize: 12,
                        },
                        name: 'content',
                    });

                    if (cfg.warning == 1) {
                        group.addShape('text', {
                            attrs: {
                                textBaseline: 'top',
                                y: cfg.value.length * 20 + 25,
                                x: 5,
                                lineHeight: 20,
                                text: '警告：缺少事实依据',
                                fill: '#F56C6C',
                                fontSize: 12,
                            },
                            name: 'warning',
                        });
                    }

                    return shape;
                },
                setState: function setState(name, value, item) {
                    const group = item.getContainer();
                    const children = group.get('children');

                    if (name === 'highlight') {
                        if (value) {
                            children.forEach((shape) => {
                                if (shape.cfg.name === 'main-box') {
                                    shape.attr('lineWidth', 3);
                                    shape.attr('shadowColor', COLOR_TBL[item.getModel().textType]);
                                    shape.attr('shadowBlur', 5);
                                }
                            });
                        } else {
                            children.forEach((shape) => {
                                if (shape.cfg.name === 'main-box') {
                                    shape.attr('lineWidth', 1);
                                    shape.attr('shadowColor', 'transparent');
                                    shape.attr('shadowBlur', 0);
                                }
                            });
                        }
                    }
                },
            },
            'single-node',
        );

        const container = document.getElementById('container');
        const width = container.scrollWidth;
        const height = container.scrollHeight;

        this.graph = new G6.Graph({
            container: 'container',
            width,
            height,
            fitCenter: true,
            defaultNode: {
                type: 'card-node',
            },
            fitView: true,
        });

        const nodeMap = new Map();
        var curY = 10;

        this.graphData.nodes.forEach(function (node, i) {
            node.x = 10;
            node.y = curY;
            curY = curY + 10 + 20 + (node.value.length + node.warning) * 20;
            nodeMap.set(node.id, node);
        });
        this.graphData.edges.forEach((edge) => {
            edge.type = 'arc';
            const source = nodeMap.get(edge.source);
            edge.curveOffset = 20;
            edge.color = source.color;
        });

        this.graph.on('node:mouseover', function (e) {
            document.getElementById(e.item.getModel().id).onmouseover();
            e.item.setState('highlight', true, e.item);
        });
        this.graph.on('node:mouseout', function (e) {
            document.getElementById(e.item.getModel().id).onmouseout();
            e.item.setState('highlight', false, e.item);
        });

        this.graph.data(this.graphData);
        this.graph.render();

        if (typeof window !== 'undefined')
            window.onresize = () => {
                if (!this.graph || this.graph.get('destroyed')) return;
                if (!container || !container.scrollWidth || !container.scrollHeight) return;
                this.graph.changeSize(container.scrollWidth, container.scrollHeight);
            };
    },
    handleCommand(command) {
        eval(`this.onExport${command.charAt(0).toUpperCase() + command.slice(1)}()`);
    },
    downloadDoc(blob) {
        var fileName = this.exportForm.courtName + this.exportForm.name;
        if (window.navigator.msSaveOrOpenBlob) {  // IE浏览器下
            navigator.msSaveBlob(blob, fileName);
        } else {
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            window.URL.revokeObjectURL(link.href);
        }
    }
    // },
});
