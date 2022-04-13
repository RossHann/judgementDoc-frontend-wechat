var app = getApp()
var api = require('../../utils/api.js')

Page({
    data: {
        DocContent: '',
        curLength:0,
        result: null,
        exportForm:{
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
        graphData:{
            nodes:[],
            edges:[],
        },
        exportTypes: ['pdf','word'],
    },


    // check({commit}, data) {
    check(data) {
        // return new Promise((resolve, reject) => {
        //     api.checkAPI(data).then(response=>{
        //         wx.showToast({
        //             title: 'res'
        //         })
        //         if (response.data.success){
        //             resolve(response.data.content);
        //         }
        //         else {
        //             reject(response.data.message);
        //         }
        //     })
        // })
        api.checkAPI(data, {
            success(res) {
                var resultJ = JSON.parse(res)
                // wx.showToast({
                //     content: resultJ.data,
                //     title: 'in store'
                // })
                // if (resultJ.success) {
                //     wx.hideLoading();
                //     wx.showModal({
                //         content: resultJ.content,
                //         showCancel: false,
                //         confirmText: '明白了'
                //     })
                // } else {
                //         wx.hideLoading();
                //         wx.showModal({
                //             content: resultJ.message,
                //             showCancel: false,
                //             confirmText: '明白了'
                //         })
                // }
                // callback.success(resultJ)
                this.result = res;
                this.data.DocContent = '';
                this.graphData = {
                    nodes: [],
                    edges: []
                }
                for (let text of this.result.texts){
                    if(text.type == 0){
                        var span = document.createTextNode(text.content);
                    }
                    else{
                        var span = document.createTextNode('span');

                    }
                }
            }
        })
    },

    onCheck: function (e){
        var text = this.data.DocContent;
        // var text = 'data'
        this.check(text).then(res =>{
            this.result = res;
            this.data.DocContent = '';
            this.graphData = {
                nodes: [],
                edges: []
            }

            for (let text of this.result.texts){
                if(text.type == 0){
                    var span = document.createTextNode(text.content);
                }
                else{
                    var span = document.createElement('span');
                    span.id =  text.id;
                    span.className = `text${text.type}`;
                    span.style.border = `${COLOR_TBL[text.type]} solid 1px`;
                    span.style.borderRadius = '3px';
                    span.style.backgroundColor = `${COLOR_TBL[text.type]}20`;
                    span.innerText = text.content;

                    var that = this;
                    span.onmouseover = function(){
                        this.style.boxShadow = `0 0 8px ${COLOR_TBL[text.type]}`;
                        this.style.backgroundColor = `${COLOR_TBL[text.type]}40`;
                        that.graph.getNodes().forEach(function (node) {
                            if (node.getID() == text.id) {
                                node.setState('highlight', true, node);
                            }
                        });
                        that.graph.paint();
                    }
                    span.onmouseout = function () {
                        this.style.boxShadow = null;
                        this.style.backgroundColor = `${COLOR_TBL[text.type]}20`;
                        that.graph.getNodes().forEach(function (node) {
                            if (node.getID() == text.id) {
                                node.setState('highlight', false, node);
                            }
                        });
                        that.graph.paint();
                    }
                    var node = {
                        anchorPoints: [
                            [1, 0.5],
                            [1, 0.5],
                        ],
                        id: text.id,
                        textType: text.type,
                        warning: 0,
                    };
                    if (text.type == 1) {
                        node['title'] = `事实${text.count}`;
                        node['value'] = mergeText(text.content, 12, 410);
                        for (let relation of text.relations) {
                            this.graphData.edges.push({
                                source: text.id,
                                target: relation,
                                style: {
                                    lineWidth: 1,
                                    stroke: COLOR_TBL[1],
                                }
                            })
                        }
                    } else if (text.type == 2) {
                        node['title'] = `《${text.article.law}》${text.article.number}`;
                        node['value'] = mergeText(text.article.content, 12, 410);
                        if (text.relations.length == 0) {
                            node['warning'] = 1;
                        }
                    } else if (text.type == 3) {
                        node['title'] = `结论${text.count}`;
                        node['value'] = mergeText(text.content, 12, 410);
                        for (let relation of text.relations) {
                            this.graphData.edges.push({
                                source: relation,
                                target: text.id,
                                style: {
                                    lineWidth: 1,
                                    stroke: COLOR_TBL[2],
                                }
                            })
                        }
                    }
                    this.graphData.nodes.push(node);

                }
                document.getElementById('textInput').appendChild(span);
            }
            this.initG6();
        }).catch(err =>{
            wx.showToast({
                title: err,
                icon: "error",
                duration: 2000

            })
        })
    },

    addMember() {
        this.exportForm.members.push({
            status: '',
            name: ''
        })
    },

    bindTextAreaBlur:function (e){
        this.setData({
            DocContent: e.detail.value
        })
    },
    delMember(index) {
        this.exportForm.members.splice(index, 1)
    },


        onExportPdf(){
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
