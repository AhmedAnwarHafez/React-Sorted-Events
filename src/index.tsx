import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import * as qs from "query-string";

console.log(qs.parse(window.location.search).id as string);

ReactDOM.render(<App entityId={qs.parse(window.location.search).id as string} />, 
    document.getElementById("root")
);