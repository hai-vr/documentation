// @ts-ignore
import React from 'react';
import { useState } from 'react';

const ratios = {
    usdPaidByUser: 10,
    vrchatCreditsGranted: 1200,
    usdEarnedBySteam: 3,
    usdCreatorEconomy: 6,
    usdEarnedByVRChat: 1.918,
    vrchatCreditsPayout: 1016.4,
    usdPaymentProcessor: 0.07623,
    usdPaidOutToCreator: 5.00577,
    avatarsSoldAtMinPrice: 1,
    vrcPlusMonthlySubs: 0.2742857142857143,
    vrcPlusYearlySubs: 0.0274285714285714,
    employeesAt100kPerYear: 0.00001918,
};

const fieldLabels = {
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

export function VBucksCalc() {
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
            <h2 className="text--xl font--bold margin-bottom--md">Purchasing credits</h2>

            {fields.map((field, index) => (
                <React.Fragment key={field}>
                    {field === 'usdEarnedByVRChat' && (
                        <h2 className="text--xl font--bold margin-bottom--md">Sales and payout</h2>
                    )}
                    {field === 'avatarsSoldAtMinPrice' && (
                        <h2 className="text--xl font--bold margin-bottom--md">Estimations</h2>
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
                            <label className="text--normal">{fieldLabels[field]}</label>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}
