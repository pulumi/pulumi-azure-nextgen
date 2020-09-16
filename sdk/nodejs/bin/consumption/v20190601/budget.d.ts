import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A budget resource.
 */
export declare class Budget extends pulumi.CustomResource {
    /**
     * Get an existing Budget resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Budget;
    /**
     * Returns true if the given object is an instance of Budget.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Budget;
    /**
     * The total amount of cost to track with the budget
     */
    readonly amount: pulumi.Output<number>;
    /**
     * The category of the budget, whether the budget tracks cost or usage.
     */
    readonly category: pulumi.Output<string>;
    /**
     * The current amount of cost which is being tracked for a budget.
     */
    readonly currentSpend: pulumi.Output<outputs.consumption.v20190601.CurrentSpendResponse>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * May be used to filter budgets by resource group, resource, or meter.
     */
    readonly filters: pulumi.Output<outputs.consumption.v20190601.FiltersResponse | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Dictionary of notifications associated with the budget. Budget can have up to five notifications.
     */
    readonly notifications: pulumi.Output<{
        [key: string]: outputs.consumption.v20190601.NotificationResponse;
    } | undefined>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
     */
    readonly timeGrain: pulumi.Output<string>;
    /**
     * Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
     */
    readonly timePeriod: pulumi.Output<outputs.consumption.v20190601.BudgetTimePeriodResponse>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Budget resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BudgetArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Budget resource.
 */
export interface BudgetArgs {
    /**
     * The total amount of cost to track with the budget
     */
    readonly amount: pulumi.Input<number>;
    /**
     * Budget Name.
     */
    readonly budgetName: pulumi.Input<string>;
    /**
     * The category of the budget, whether the budget tracks cost or usage.
     */
    readonly category: pulumi.Input<string>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * May be used to filter budgets by resource group, resource, or meter.
     */
    readonly filters?: pulumi.Input<inputs.consumption.v20190601.Filters>;
    /**
     * Dictionary of notifications associated with the budget. Budget can have up to five notifications.
     */
    readonly notifications?: pulumi.Input<{
        [key: string]: pulumi.Input<inputs.consumption.v20190601.Notification>;
    }>;
    /**
     * The scope associated with budget operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope.
     */
    readonly scope: pulumi.Input<string>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
     */
    readonly timeGrain: pulumi.Input<string>;
    /**
     * Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
     */
    readonly timePeriod: pulumi.Input<inputs.consumption.v20190601.BudgetTimePeriod>;
}
