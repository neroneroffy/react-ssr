import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
export const render = (req) => {
    const content = renderToString((
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
    ))
   return `
    <html>
        <head>
          <title>SSR</title>
        </head>
        <body>
            <div id="root">${content}</div>
        </body>
        <script src="/index.js"></script>
    </html>
`
}