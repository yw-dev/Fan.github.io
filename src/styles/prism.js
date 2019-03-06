import { css } from '@emotion/core';
import theme from '../../config/theme';

const prism = css`
  p > code, 
  li > code {
    color: #f8f8f2;
    background: #131316;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    padding: 0.4em 0.5em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
    tab-size: 4;
    hyphens: none;
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }
  pre[class*='language-'] {
    padding: 1em;
    margin: 1.5rem 0;
    overflow: auto;
    border-radius: 0.3em;
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.card.base};
    }
    &::-webkit-scrollbar-track {
      background: ${theme.colors.black.base};
    }
    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }
  }
  pre[class*='language-'] {
    background: #131316;
  }
  
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    border: none;
    background: #2a3644;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .3em .4em;
    border-radius: .3em;
    white-space: normal;
    background: var(--whitegrey);
    text-shadow: none;
    color: var(--darkgrey);
    font-size: 0.9em;
  }

  p > a{    
    color:  ${theme.colors.label.blue};
  }
  a > code[class*="language-"] {
    color: var(--blue);
  }
  p > code[class*='language-'],
  li > code[class*='language-'] {
    border-radius: 0.5em;
    background:  ${theme.colors.card.light};
    color: ${theme.colors.white.grey};
    bottom: 2px;
    position: relative;
  }
  .token.operator {
    color: #bc78d7;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: #7ad7e2;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ef514f;
  }
  .token.boolean,
  .token.number {
    color: #ae81ff;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #e5db89;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }
  .token.atrule,
  .token.attr-value,
  .token.class-name {
    color: #e6db74;
  }
  .token.function {
    color: #84c16a;
  }

  .token.keyword {
    color: #6095ea;
  }
  .token.regex,
  .token.important {
    color: #fd971f;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
`;

export default prism;
