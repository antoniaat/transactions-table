import { get } from "../../utils/data-utils";

const getTransactionsEndpoint = 'https://run.mocky.io/v3/3f8acc90-fde9-4c01-8097-880882d90dc0?mocky-delay=5s';

class TransactionsService {
    constructor() {
        this.getAll = this.getAll.bind(this);
    }

    getAll() {
        return get(getTransactionsEndpoint);
    }
}

export default TransactionsService;