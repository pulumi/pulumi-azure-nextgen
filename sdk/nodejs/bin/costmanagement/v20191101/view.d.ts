import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * States and configurations of Cost Analysis.
 */
export declare class View extends pulumi.CustomResource {
    /**
     * Get an existing View resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): View;
    /**
     * Returns true if the given object is an instance of View.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is View;
    /**
     * Show costs accumulated over time.
     */
    readonly accumulated: pulumi.Output<string | undefined>;
    /**
     * Chart type of the main view in Cost Analysis. Required.
     */
    readonly chart: pulumi.Output<string | undefined>;
    /**
     * Date the user created this view.
     */
    readonly createdOn: pulumi.Output<string>;
    /**
     * Has definition for data in this report config.
     */
    readonly dataset: pulumi.Output<outputs.costmanagement.v20191101.ReportConfigDatasetResponse | undefined>;
    /**
     * User input name of the view. Required.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * List of KPIs to show in Cost Analysis UI.
     */
    readonly kpis: pulumi.Output<outputs.costmanagement.v20191101.KpiPropertiesResponse[] | undefined>;
    /**
     * Metric to use when displaying costs.
     */
    readonly metric: pulumi.Output<string | undefined>;
    /**
     * Date when the user last modified this view.
     */
    readonly modifiedOn: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Configuration of 3 sub-views in the Cost Analysis UI.
     */
    readonly pivots: pulumi.Output<outputs.costmanagement.v20191101.PivotPropertiesResponse[] | undefined>;
    /**
     * Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
     */
    readonly scope: pulumi.Output<string | undefined>;
    /**
     * Has time period for pulling data for the report.
     */
    readonly timePeriod: pulumi.Output<outputs.costmanagement.v20191101.ReportConfigTimePeriodResponse | undefined>;
    /**
     * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
     */
    readonly timeframe: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a View resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ViewArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a View resource.
 */
export interface ViewArgs {
    /**
     * Show costs accumulated over time.
     */
    readonly accumulated?: pulumi.Input<string>;
    /**
     * Chart type of the main view in Cost Analysis. Required.
     */
    readonly chart?: pulumi.Input<string>;
    /**
     * Has definition for data in this report config.
     */
    readonly dataset?: pulumi.Input<inputs.costmanagement.v20191101.ReportConfigDataset>;
    /**
     * User input name of the view. Required.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * List of KPIs to show in Cost Analysis UI.
     */
    readonly kpis?: pulumi.Input<pulumi.Input<inputs.costmanagement.v20191101.KpiProperties>[]>;
    /**
     * Metric to use when displaying costs.
     */
    readonly metric?: pulumi.Input<string>;
    /**
     * Configuration of 3 sub-views in the Cost Analysis UI.
     */
    readonly pivots?: pulumi.Input<pulumi.Input<inputs.costmanagement.v20191101.PivotProperties>[]>;
    /**
     * Cost Management scope to save the view on. This includes 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, 'providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
     */
    readonly scope?: pulumi.Input<string>;
    /**
     * Has time period for pulling data for the report.
     */
    readonly timePeriod?: pulumi.Input<inputs.costmanagement.v20191101.ReportConfigTimePeriod>;
    /**
     * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
     */
    readonly timeframe: pulumi.Input<string>;
    /**
     * The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.
     */
    readonly type: pulumi.Input<string>;
    /**
     * View name
     */
    readonly viewName: pulumi.Input<string>;
}
