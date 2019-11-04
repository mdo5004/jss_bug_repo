import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = () => ({
    root: {
    },
});

const Input = (props) => {
    const { classes, className, ...rest } = props;
    return <input type='text' {...rest} />;
};

Input.defaultProps = {
    classes: {},
};

Input.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
};

export default withStyles(styles)(Input);
