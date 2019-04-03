import React from 'react';

import { helloworldPropTypes, defaultHelloWorldPropTypes } from '../../prop-types/hello-world.proptypes';

const helloWorldInput = props => {
    const { value, label } = props;

    return (
        <div>
            {label}
            <input type="text" value={value} onChange={props.onChange}/>
        </div>
    )
}

helloWorldInput.propTypes = helloworldPropTypes;
helloWorldInput.defaultProps = defaultHelloWorldPropTypes;

export default helloWorldInput;
