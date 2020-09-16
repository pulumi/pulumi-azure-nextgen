import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A budget resource.
 */
export declare class BudgetByResourceGroupName extends pulumi.CustomResource {
    /**
     * Get an existing BudgetByResourceGroupName resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BudgetByResourceGroupName;
    /**
     * Returns true if the given object is an instance of BudgetByResourceGroupName.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BudgetByResourceGroupName;
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
    readonly currentSpend: pulumi.Output<outputs.consumption.v20180331.CurrentSpendResponse>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * May be used to filter budgets by resource group, resource, or meter.
     */
    readonly filters: pulumi.Output<outputs.consumption.v20180331.FiltersResponse | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Dictionary of notifications associated with the budget. Budget can have up to five notifications.
     */
    readonly notifications: pulumi.Output<{
        [key: string]: outputs.consumption.v20180331.NotificationResponse;
    } | undefined>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
     */
    readonly timeGrain: pulumi.Output<string>;
    /**
     * Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
     */
    readonly timePeriod: pulumi.Output<outputs.consumption.v20180331.BudgetTimePeriodResponse>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a BudgetByResourceGroupName resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BudgetByResourceGroupNameArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a BudgetByResourceGroupName resource.
 */
export interface BudgetByResourceGroupNameArgs {
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
    readonly filters?: pulumi.Input<inputs.consumption.v20180331.Filters>;
    /**
     * Dictionary of notifications associated with the budget. Budget can have up to five notifications.
     */
    readonly notifications?: pulumi.Input<{
        [key: string]: pulumi.Input<inputs.consumption.v20180331.Notification>;
    }>;
    /**
     * Azure Resource Group Name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
     */
    readonly timeGrain: pulumi.Input<string>;
    /**
     * Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
     */
    readonly timePeriod: pulumi.Input<inputs.consumption.v20180331.BudgetTimePeriod>;
}
