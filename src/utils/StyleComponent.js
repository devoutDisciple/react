import React from 'react';
export const SpanComponent = (props) => {
    console.log(`props = ${props}`);
    return (
        <div className="antd_other_mycomponent">
            <div className={props.className1 ? `antd_other_mycomponent_span ${props.className1}` : 'antd_other_mycomponent_span'}>{props.label}: </div>
            <div className={props.className2 ? `antd_other_mycomponent_span ${props.className2}` : 'antd_other_mycomponent_span'}>{props.children}</div>
        </div>
    );
};
