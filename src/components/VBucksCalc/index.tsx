// @ts-ignore
import React from 'react';
import { useState } from 'react';

const constants = {
    STEAM_OR_APPSTORE_REVENUE_SHARE: 0.3,
    PURCHASE_FEE: 0.4,
    TRANSACTION_FEE: 0.153,
    PAYOUT_FEE: 0.015,
    VRCHAT_PLUS_MONTHLY_SUBSCRIPTION_PRICE_USD: 10,
    VRCHAT_PLUS_YEARLY_SUBSCRIPTION_PRICE_USD: 100,
    VRCHAT_AVATAR_MARKETPLACE_MINIMUM_PRICE_CREDITS: 1200,
    usdPaidByUser: 10,
    vrchatCreditsGranted: 1200,
};

const ratios = (() => {
    const c = constants;

    const usdEarnedBySteam = c.STEAM_OR_APPSTORE_REVENUE_SHARE * c.usdPaidByUser;
    const usdCreatorEconomy = (1 - c.PURCHASE_FEE) * c.usdPaidByUser;
    const usdEarnedByVRChat =
        (c.usdPaidByUser - usdEarnedBySteam - usdCreatorEconomy) +
        c.TRANSACTION_FEE * usdCreatorEconomy;
    const vrchatCreditsPayout = (1 - c.TRANSACTION_FEE) * c.vrchatCreditsGranted;
    const usdPaymentProcessor =
        (usdCreatorEconomy - c.TRANSACTION_FEE * usdCreatorEconomy) * c.PAYOUT_FEE;
    const usdPaidOutToCreator =
        usdCreatorEconomy - c.TRANSACTION_FEE * usdCreatorEconomy - usdPaymentProcessor;
    const avatarsSoldAtMinPrice =
        c.vrchatCreditsGranted / c.VRCHAT_AVATAR_MARKETPLACE_MINIMUM_PRICE_CREDITS;
    const vrcPlusMonthlySubs =
        usdEarnedByVRChat /
        ((1 - c.STEAM_OR_APPSTORE_REVENUE_SHARE) * c.VRCHAT_PLUS_MONTHLY_SUBSCRIPTION_PRICE_USD);
    const vrcPlusYearlySubs =
        usdEarnedByVRChat /
        ((1 - c.STEAM_OR_APPSTORE_REVENUE_SHARE) * c.VRCHAT_PLUS_YEARLY_SUBSCRIPTION_PRICE_USD);
    const employeesAt100kPerYear = usdEarnedByVRChat / 100_000;

    return {
        usdPaidByUser: c.usdPaidByUser, // = 10
        vrchatCreditsGranted: c.vrchatCreditsGranted, // = 1200
        usdEarnedBySteam, // = 3.0
        usdCreatorEconomy, // = 6.0
        usdEarnedByVRChat, // = 1.918
        vrchatCreditsPayout, // = 1016.4
        usdPaymentProcessor, // = 0.07623
        usdPaidOutToCreator, // = 5.00577
        avatarsSoldAtMinPrice, // = 1.0
        vrcPlusMonthlySubs, // = 0.2742857142857143
        vrcPlusYearlySubs, // = 0.0274285714285714
        employeesAt100kPerYear // = 0.00001918
    };
})();

const fieldLabels = {
    en: {
        usdPaidByUser: 'USD paid by user (without VAT)',
        vrchatCreditsGranted: 'VRChat Credits granted to user',
        usdEarnedBySteam: 'USD earned by Steam',
        usdCreatorEconomy: 'USD reserved for the Creator Economy',
        usdEarnedByVRChat: 'USD earned by VRChat after one sale*',
        vrchatCreditsPayout: 'VRChat Credits earned by seller',
        usdPaymentProcessor: 'USD earned by payment processor',
        usdPaidOutToCreator: 'USD paid out to the creator',
        avatarsSoldAtMinPrice: 'Number of avatars sold at minimum price',
        vrcPlusMonthlySubs: 'Equivalent # of monthly VRC+ subscriptions sold (VRChat earnings after Steam\'s cut**)',
        vrcPlusYearlySubs: 'Equivalent # of yearly VRC+ subscriptions sold (VRChat earnings after Steam\'s cut**)',
        employeesAt100kPerYear: 'Number of employees that can be paid at 100K USD per year',
        sectionTitles: {
            purchasing: 'Purchasing credits',
            sales: 'Sales and payout',
            estimations: 'Estimations'
        }
    },
    ja: {
        usdPaidByUser: 'ユーザーが支払うUSD（VAT除く）',
        vrchatCreditsGranted: 'ユーザーに付与されるVRChatクレジット',
        usdEarnedBySteam: 'Steamの収益（USD）',
        usdCreatorEconomy: 'クリエイターエコノミー用に確保されたUSD',
        usdEarnedByVRChat: '1回の販売でVRChatが得る収益（USD）*',
        vrchatCreditsPayout: '販売者が得るVRChatクレジット',
        usdPaymentProcessor: '決済処理業者の収益（USD）',
        usdPaidOutToCreator: 'クリエイターへの支払額（USD）',
        avatarsSoldAtMinPrice: '最低価格で販売されたアバターの数',
        vrcPlusMonthlySubs: '月額VRC+サブスクリプションの相当数（Steamカット後のVRChat収益**）',
        vrcPlusYearlySubs: '年額VRC+サブスクリプションの相当数（Steamカット後のVRChat収益**）',
        employeesAt100kPerYear: '年間10万USDで雇用可能な従業員数',
        sectionTitles: {
            purchasing: 'クレジットの購入',
            sales: '販売と支払い',
            estimations: '推定値'
        }
    }
};

const currency = {
    usdPaidByUser: '$',
    vrchatCreditsGranted: '\\V',
    usdEarnedBySteam: '$',
    usdCreatorEconomy: '$',
    usdEarnedByVRChat: '$',
    vrchatCreditsPayout: '\\V',
    usdPaymentProcessor: '$',
    usdPaidOutToCreator: '$',
    avatarsSoldAtMinPrice: '',
    vrcPlusMonthlySubs: '',
    vrcPlusYearlySubs: '',
    employeesAt100kPerYear: '',
};

const fields = Object.keys(ratios).filter(field => field !== 'vrcPlusMonthsInYearlySub');

export function VBucksCalc({ language = 'en' }) {
    const [values, setValues] = useState(() => {
        const initial = {};
        fields.forEach((field) => {
            initial[field] = ratios[field];
        });
        return initial;
    });

    const [editingField, setEditingField] = useState(null);
    const [inputValues, setInputValues] = useState(() => {
        const initial = {};
        fields.forEach((field) => {
            initial[field] = ratios[field].toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
        });
        return initial;
    });

    const labels = fieldLabels[language] || fieldLabels.en;

    const handleChange = (changedField, newValue) => {
        setEditingField(changedField);
        setInputValues((prev) => ({ ...prev, [changedField]: newValue }));

        const rawValue = newValue.replace(/,/g, '');
        const numericInput = parseFloat(rawValue);

        if (isNaN(numericInput)) return;

        const valueInUSD = numericInput;
        const baseUSD = valueInUSD / ratios[changedField] * ratios['usdPaidByUser'];

        const updated = {};
        const updatedInputValues = {};
        fields.forEach((field) => {
            const computed = (baseUSD * ratios[field]) / ratios['usdPaidByUser'];
            const displayValue = computed;
            updated[field] = parseFloat(computed.toFixed(6));
            updatedInputValues[field] = field === changedField
                ? displayValue.toLocaleString(undefined, { maximumFractionDigits: 6 })
                : displayValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
        });
        setValues(updated);
        setInputValues(updatedInputValues);
    };

    return (
        <div className="container margin-vert--lg">
            <h2 className="text--xl font--bold margin-bottom--md">{labels.sectionTitles.purchasing}</h2>

            {fields.map((field, index) => (
                <React.Fragment key={field}>
                    {field === 'usdEarnedByVRChat' && (
                        <h2 className="text--xl font--bold margin-bottom--md">{labels.sectionTitles.sales}</h2>
                    )}
                    {field === 'avatarsSoldAtMinPrice' && (
                        <h2 className="text--xl font--bold margin-bottom--md">{labels.sectionTitles.estimations}</h2>
                    )}
                    <div className="row align-center margin-vert--sm">
                        <div className="col col--3">
                            <input
                                type="text"
                                value={inputValues[field]}
                                onFocus={() => setEditingField(field)}
                                onBlur={() => setEditingField(null)}
                                onChange={(e) => handleChange(field, e.target.value)}
                                className="input"
                                style={{ textAlign: 'right' }}
                            />
                            &nbsp;&nbsp;{currency[field]}
                        </div>
                        <div className="col col--7">
                            <label className="text--normal">{labels[field]}</label>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}