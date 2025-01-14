/*
* The version of the ZaloPay OpenAPI document: v1.0.0
* Contact: developer@zalopay.vn
*
* NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
* https://openapi-generator.tech
* Do not edit this class manually.
*/

export class DisbursementQueryOrderResponseData {
    /**
    * Merchant transaction code
    */
    'order_id'?: string;

    /**
    * 1 – SUCCESS  2 – FAIL  3 – PROCESSING: Has to repeat query order status in a period of time until final status (configured interval and number of query)  4 – PENDING: Pending transactions, needs to be manually fixed by internal teams
    */
    'status'?: number;

    /**
    * User\'s identity
    */
    'm_u_id'?: string;

    /**
    * User’s phone
    */
    'phone'?: string;

    /**
    * Transaction amount
    */
    'amount'?: number;

    /**
    * Transaction description
    */
    'description'?: string;

    /**
    * Partner fee
    */
    'partner_fee'?: number;

    /**
    * ZaloPay fee
    */
    'zlp_fee'?: number;

    /**
    * Order extra info, json string
    */
    'extra_info'?: string;

    /**
    * Transaction timestamp in millisecond
    */
    'time'?: number;

    /**
    * ZaloPay\'s transaction code
    */
    'zp_trans_id'?: string;

    /**
    * ZaloPay middle_page url for notify merchant about success disbursement result
    */
    'result_url'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "order_id",
            "baseName": "order_id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "m_u_id",
            "baseName": "m_u_id",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "partner_fee",
            "baseName": "partner_fee",
            "type": "number"
        },
        {
            "name": "zlp_fee",
            "baseName": "zlp_fee",
            "type": "number"
        },
        {
            "name": "extra_info",
            "baseName": "extra_info",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "zp_trans_id",
            "baseName": "zp_trans_id",
            "type": "string"
        },
        {
            "name": "result_url",
            "baseName": "result_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DisbursementQueryOrderResponseData.attributeTypeMap;
    }
}

