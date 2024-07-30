import { Global, css } from '@emotion/react';
import { mq, sp } from './index';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body,
        #root {
          padding: 0px !important;
          height: 100%;
          margin: 0px !important;
        }

        body {
          font-family: Roboto, Helvetica, Arial, sans-serif;
          font-size: 25.6px;
          line-height: 1.4;
          font-weight: 400;
          line-height: 1.5;
          min-height: 100%;
          position: relative;
          color: #333333;
          margin: 0 !important;
          padding: 0 !important;
          font-size: 16px;
        }

        .Pacifico-Regular {
          font-family: 'Pacifico-Regular', 'Arial', 'Helvetica', sans-serif;
        }

        .RobotoMono-MediumItalic {
          font-family: 'RobotoMono-MediumItalic', 'Arial', 'Helvetica',
            sans-serif;
        }

        .hidden-sp {
          display: block;
          ${mq[sp]} {
            display: none;
          }
        }

        .hidden-pc {
          display: none;
          ${mq[sp]} {
            display: block;
          }
        }

        .indent {
          text-indent: -1em;
          padding-left: 1em;
        }

        .indent-half {
          text-indent: -0.5em;
          padding-left: 1em;
        }

        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          text-decoration: none;
        }

        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }

        blockquote,
        q {
          quotes: none;
        }

        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        ol,
        ul {
          list-style: none;
        }

        img {
          max-width: 100%;
          line-height: 0;
          font-size: 0;
          vertical-align: middle;
          border-style: none;
        }

        a {
          transition: 0.5s all;
          -webkit-transition: 0.5s all;
          -moz-transition: 0.5s all;
          -o-transition: 0.5s all;
          -ms-transition: 0.5s all;
          text-decoration: none;
          outline: none;
        }

        a:hover {
          text-decoration: none;
        }

        a:focus {
          outline: none;
          text-decoration: none;
        }

        *,
        ::before,
        *::after {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        ::-webkit-scrollbar {
          display: none;
        }

        .clearfix::after {
          display: block;
          clear: both;
          content: '';
          line-height: 0;
          visibility: hidden;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 400;
        }

        .popup {
          background-color: #FFAA15 !important;
          background-size: 100% 100%;
        }
        
        .popup::after {
          display: none;
        }
        }      
      `}
    />
  );
};