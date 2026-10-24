import { DateTime } from 'luxon';

const version = process.env.VERSION;
const account = process.env.ACCOUNT;
const region = process.env.AWS_REGION;

type EventProps = {
    context: {
        requestId: string,
    },
};

/**
 * Basic API response function.
 * Includes luxon to demonstrate use of npm modules in build.
 */
export const handler = async (event: EventProps) => {
    console.log('Event: ', JSON.stringify(event));
    return {
        version,
        account,
        region,
        time: DateTime.now().toFormat('yyyy MM dd, HH:mm ZZ'),
        requestId: event.context.requestId || 'Missing requestId',
    };
};
