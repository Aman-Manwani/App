
import TransactionListItem from '@components/SelectionList/TransactionListItem';
import type * as OnyxTypes from '@src/types/onyx';
import type {SearchTransaction} from '@src/types/onyx/SearchResults';

const searchTypeToItemMap = {
    transaction: {
        listItem: TransactionListItem,
    },
};

const getTransactionsSections = (data: OnyxTypes.SearchResults['data']): SearchTransaction[] =>
    Object.entries(data)
        .filter(([key]) => key.startsWith('transactions_'))
        .map(([, value]) => value);

/**
 * TODO: in future make this function generic and return specific item component based on type
 * For now only 1 search item type exists in the app so this function is simplified
 */
function getListItem(): typeof TransactionListItem {
    return searchTypeToItemMap.transaction.listItem;
}

export {getTransactionsSections, getListItem};
