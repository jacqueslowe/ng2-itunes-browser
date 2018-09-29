export const AccountType: any = {
    retirement: 'Employer Sponsored',
    investment: 'Investment',
    external: 'External',
    realEstate: 'Real Estate'
};

export const PlanType: any= {
    regular: '401(k)',
    moneyMarket: 'Money Market',
    cashBalance: 'Cash Balance',
    definedBenefit: 'Defined Benefit',
    equityAwards: "Equity Awards",
    type30: 'IRA (Type 30)'
};

export class Account {
    company: any;
    name: string;
    accountNumber: any;
    accountType: any;
    planType: any;
    balance: number;
    distribution: number;
    color: string;
    percentage: number;
    trendPercent: string;
    trending: string;
}
export class CustomerAccount {
    hasDetails:boolean;
    isExpanded;
    company: any;
    name: string;
    accountNumber: any;
    accountType: any;
    accountTypeDescription: string;
    planType: any;
    planTypeDescription:string;
    balance: number;
    distribution: number;
    color: string;
    percentage: number;
    trendPercent: string;
    trending: string;
    dayChange: number;
    dayChangePct: number;
}

