import { Moment } from "moment";
import moment = require("moment");

export interface Event {
    key: number;
    EventName: string;
    FormattedDate: string;
    Date?: Moment;
    Duration: string;
    ClassName?: string;
    Color?: string;
}

export const today = moment();

export const composeItems = (data: any): Event[] => {
    return [
        {
            key: 0,
            EventName: 'Today',
            Date: today,
            FormattedDate: today.format('DD/MM/YYYY'),
            Duration: ''
        },
        {
            key: 1,
            EventName: 'Latest Blood Test',
            Date: moment(data.hfnz_latestbloodtestdate),
            FormattedDate: moment(data.hfnz_latestbloodtestdate).isValid() ? moment(data.hfnz_latestbloodtestdate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_latestbloodtestdate).isValid() ? today.to(moment(data.hfnz_latestbloodtestdate)): '',
        },
        {
            key: 2,
            EventName: 'Latest Consult',
            Date: moment(data.hfnz_latestconsultdate),
            FormattedDate: moment(data.hfnz_latestconsultdate).isValid() ? moment(data.hfnz_latestconsultdate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_latestconsultdate).isValid() ? today.to(moment(data.hfnz_latestconsultdate)): '',
        },
        {
            key: 3,
            EventName: 'Latest Fibroscan',
            Date: moment(data.hfnz_latestfibroscandate),
            FormattedDate: moment(data.hfnz_latestfibroscandate).isValid() ? moment(data.hfnz_latestfibroscandate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_latestfibroscandate).isValid() ? today.to(moment(data.hfnz_latestfibroscandate)): '',
        },
        {
            key: 4,
            EventName: 'Latest Review by Clinician',
            Date: moment(data.hfnz_latestreviewbycliniciandate),
            FormattedDate: moment(data.hfnz_latestreviewbycliniciandate).isValid() ? moment(data.hfnz_latestreviewbycliniciandate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_latestreviewbycliniciandate).isValid() ? today.to(moment(data.hfnz_latestreviewbycliniciandate)): '',
        },
        {
            key: 5,
            EventName: 'Latest Secondary Care',
            Date: moment(data.hfnz_latestsecondarycaredate),
            FormattedDate: moment(data.hfnz_latestsecondarycaredate).isValid() ? moment(data.hfnz_latestsecondarycaredate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_latestsecondarycaredate).isValid() ? today.to(moment(data.hfnz_latestsecondarycaredate)): '',
        },
        {
            key: 6,
            EventName: 'Latest Ultrasound',
            Date: moment(data.hfnz_latestultrasounddate),
            FormattedDate: moment(data.hfnz_latestultrasounddate).isValid() ? moment(data.hfnz_latestultrasounddate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_latestultrasounddate).isValid() ? today.to(moment(data.hfnz_latestultrasounddate)): '',
        },
        {
            key: 7,
            EventName: 'Next Blood Test Due',
            Date: moment(data.hfnz_nextbloodtestduedate),
            FormattedDate: moment(data.hfnz_nextbloodtestduedate).isValid() ? moment(data.hfnz_nextbloodtestduedate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_nextbloodtestduedate).isValid() ? today.to(moment(data.hfnz_nextbloodtestduedate)): '',
        },
        {
            key: 8,
            EventName: 'Next Consult',
            Date: moment(data.hfnz_nextconsultdate),
            FormattedDate: moment(data.hfnz_nextconsultdate).isValid() ? moment(data.hfnz_nextconsultdate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_nextconsultdate).isValid() ? today.to(moment(data.hfnz_nextconsultdate)): '',
        },
        {
            key: 9,
            EventName: 'Next Fibroscan',
            Date: moment(data.hfnz_nextfibroscandate),
            FormattedDate: moment(data.hfnz_nextfibroscandate).isValid() ? moment(data.hfnz_nextfibroscandate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_nextfibroscandate).isValid() ? today.to(moment(data.hfnz_nextfibroscandate)): '',
        },
        {
            key: 10,
            EventName: 'Next Review by Clinician',
            Date: moment(data.hfnz_nextreviewbycliniciandate),
            FormattedDate: moment(data.hfnz_nextreviewbycliniciandate).isValid() ? moment(data.hfnz_nextreviewbycliniciandate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_nextreviewbycliniciandate).isValid() ? today.to(moment(data.hfnz_nextreviewbycliniciandate)): '',
        },
        {
            key: 11,
            EventName: 'Next Nurse Triage',
            Date: moment(data.hfnz_nextreviewbynursetriage),
            FormattedDate: moment(data.hfnz_nextreviewbynursetriage).isValid() ? moment(data.hfnz_nextreviewbynursetriage).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_nextreviewbynursetriage).isValid() ? today.to(moment(data.hfnz_nextreviewbynursetriage)): '',
        },
        {
            key: 12,
            EventName: 'Next Secondary Care',
            Date: moment(data.hfnz_nextsecondarycaredate),
            FormattedDate: moment(data.hfnz_nextsecondarycaredate).isValid() ? moment(data.hfnz_nextsecondarycaredate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_nextsecondarycaredate).isValid() ? today.to(moment(data.hfnz_nextsecondarycaredate)): '',
        },
        {
            key: 13,
            EventName: 'Next Ultrasound',
            Date: moment(data.hfnz_nextultrasounddate),
            FormattedDate: moment(data.hfnz_nextultrasounddate).isValid() ? moment(data.hfnz_nextultrasounddate).format('DD/MM/YYYY') : '',
            Duration: moment(data.hfnz_nextultrasounddate).isValid() ? today.to(moment(data.hfnz_nextultrasounddate)): '',
        },
    ]
};