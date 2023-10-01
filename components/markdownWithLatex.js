import ReactMarkdown from 'react-markdown';
import latexRenderer from './latexRenderer';

const renderers = {
    math: ({ value}) => <latexRenderer latexString={value} />,
};

const markdownWithLatex = ({ content }) => {
    return <ReactMarkdown renderers={renderers} children={content} />;
};

export default markdownWithLatex;