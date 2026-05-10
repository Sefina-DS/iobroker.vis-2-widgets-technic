import React from 'react';

class DemoWidget extends window.visRxWidget {
    static getWidgetInfo() {
        return {
            id: 'tplDemoWidget',
            visSet: 'vis-2-widgets-react-template',
            visSetLabel: 'vis_2_widgets_template',
            visSetColor: '#cf00ff',
            visName: 'DemoWidget',
            visAttrs: [
                {
                    name: 'common',
                    fields: [
                        {
                            name: 'oid',
                            type: 'id',
                            label: 'OID',
                        },
                    ],
                },
            ],
            visPrev: 'widgets/vis-2-widgets-react-template/img/vis-widget-demo.png',
        };
    }

    getWidgetInfo() {
        return DemoWidget.getWidgetInfo();
    }

    propertiesUpdate() {}
    componentDidMount() { super.componentDidMount(); this.propertiesUpdate(); }
    onRxDataChanged() { this.propertiesUpdate(); }
    onRxStyleChanged() {}
    onStateUpdated(id, state) {}

    renderWidgetBody(props) {
        super.renderWidgetBody(props);
        return <div style={{ width: '100%', height: '100%', padding: 10, background: '#161c24', color: '#2ecfbf', fontFamily: 'Arial' }}>
            <div>Demo Widget</div>
            <div>{this.state.values[`${this.state.rxData.oid}.val`]}</div>
        </div>;
    }
}

export default DemoWidget;
