import React from 'react';
import katex from 'katex';

const latexRenderer = ({ latexString }) => {
    const html = katex.renderToString(latexString, {
        throwOnError: false,
    });

    return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default latexRenderer;