import * as React from "react";
import { mergeStyleSets } from "office-ui-fabric-react";
import { composeItems, today, Event } from "../utils";

export interface State {
    items?: Event[];
}

export class App extends React.Component<{ entityId: string }, State> {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    async componentDidMount() {

        const response = await this.getRecord(this.props.entityId);
        const data = await response.json() as any;
        const items = composeItems(data);

        const styledItems = items.map(i => ({
            ...i
            , ClassName: i.key === 0
                ? classes.today
                : i.Date && today.diff(i.Date) < 0
                    ? classes.future
                    : classes.past
            , Color: i.key === 0
                ? 'black'
                : i.Date && today.diff(i.Date) < 0
                    ? 'lightgreen'
                    : 'lightgrey'
        }));

        const orderedItems = styledItems.sort(function (a, b) {
            if (!a.Date.isValid()) return 0;
            if (!b.Date.isValid()) return -1;
            return b.Date.diff(a.Date);
        });


        this.setState({ items: orderedItems });
    }

    render() {
        const { items } = this.state;
        return (<div>
            <table className={classes.table}>
                <colgroup>
                    <col width="50" />
                    <col width="130" />
                    <col width="100" />
                    <col width="200" />
                </colgroup>
                <tbody>
                    {items.map(i =>
                        (<tr key={i.key} className={i.ClassName}>
                            <td valign='middle' className={classes.td}>
                                <svg style={{ display: "block" }} width="50" height="40">
                                    <line x1="20" y1="0" x2="20" y2="10" style={{ stroke: "black", strokeWidth: 2 }} />
                                    <line x1="20" y1="30" x2="20" y2="46" style={{ stroke: "black", strokeWidth: 2 }} />
                                    <circle cx="20" cy="20" r="10" stroke="black" strokeWidth="2" fill={i.Color}>
                                    </circle>
                                    {i.key === 0 &&
                                        <circle cx="20" cy="20" r="5" style={{ stroke: "black", strokeWidth: 1 }} fill="white">
                                        </circle>}
                                </svg>
                            </td>
                            <td valign='middle'>{i.Duration}</td>
                            <td valign='middle'>{i.FormattedDate}</td>
                            <td valign='middle' align={'right'}>{i.EventName}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>);
    }

    getRecord = async (entityId: string) => {
        const fieldsToSelect = [
            'hfnz_latestbloodtestdate',
            'hfnz_latestconsultdate',
            'hfnz_latestfibroscandate',
            'hfnz_latestreviewbycliniciandate',
            'hfnz_latestsecondarycaredate',
            'hfnz_latestultrasounddate',
            'hfnz_nextbloodtestduedate',
            'hfnz_nextconsultdate',
            'hfnz_nextfibroscandate',
            'hfnz_nextreviewbycliniciandate',
            'hfnz_nextreviewbynursetriage',
            'hfnz_nextsecondarycaredate',
            'hfnz_nextultrasounddate'
        ];

        return fetch(`/api/data/v9.0/opportunities(${entityId})?$select=${fieldsToSelect.reduce((acc, v) => acc + ',' + v)}`);
    }
}

const classes = mergeStyleSets({
    table: {
        borderCollapse: 'collapse',
        borderSpacing: '0'
    },
    tr: {
        padding: '0'
    },
    td: {
        padding: '0'
    },
    past: {
        fontFamily: 'Segoe UI',
        fontSize: '1rem',
        color: 'grey'
    },
    today: {
        fontFamily: 'Segoe UI',
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    future: {
        fontFamily: 'Segoe UI',
        fontSize: '1rem',
    }
});