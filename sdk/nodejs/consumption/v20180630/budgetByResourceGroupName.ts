// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * A budget resource.
 */
export class BudgetByResourceGroupName extends pulumi.CustomResource {
    /**
     * Get an existing BudgetByResourceGroupName resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BudgetByResourceGroupName {
        return new BudgetByResourceGroupName(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:consumption/v20180630:BudgetByResourceGroupName';

    /**
     * Returns true if the given object is an instance of BudgetByResourceGroupName.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BudgetByResourceGroupName {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BudgetByResourceGroupName.__pulumiType;
    }

    /**
     * The total amount of cost to track with the budget
     */
    public readonly amount!: pulumi.Output<number>;
    /**
     * The category of the budget, whether the budget tracks cost or usage.
     */
    public readonly category!: pulumi.Output<string>;
    /**
     * The current amount of cost which is being tracked for a budget.
     */
    public /*out*/ readonly currentSpend!: pulumi.Output<outputs.consumption.v20180630.CurrentSpendResponse>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * May be used to filter budgets by resource group, resource, or meter.
     */
    public readonly filters!: pulumi.Output<outputs.consumption.v20180630.FiltersResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Dictionary of notifications associated with the budget. Budget can have up to five notifications.
     */
    public readonly notifications!: pulumi.Output<{[key: string]: outputs.consumption.v20180630.NotificationResponse} | undefined>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
     */
    public readonly timeGrain!: pulumi.Output<string>;
    /**
     * Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
     */
    public readonly timePeriod!: pulumi.Output<outputs.consumption.v20180630.BudgetTimePeriodResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BudgetByResourceGroupName resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BudgetByResourceGroupNameArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.amount === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'amount'");
            }
            if ((!args || args.budgetName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'budgetName'");
            }
            if ((!args || args.category === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'category'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.timeGrain === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'timeGrain'");
            }
            if ((!args || args.timePeriod === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'timePeriod'");
            }
            inputs["amount"] = args ? args.amount : undefined;
            inputs["budgetName"] = args ? args.budgetName : undefined;
            inputs["category"] = args ? args.category : undefined;
            inputs["eTag"] = args ? args.eTag : undefined;
            inputs["filters"] = args ? args.filters : undefined;
            inputs["notifications"] = args ? args.notifications : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["timeGrain"] = args ? args.timeGrain : undefined;
            inputs["timePeriod"] = args ? args.timePeriod : undefined;
            inputs["currentSpend"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["amount"] = undefined /*out*/;
            inputs["category"] = undefined /*out*/;
            inputs["currentSpend"] = undefined /*out*/;
            inputs["eTag"] = undefined /*out*/;
            inputs["filters"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["notifications"] = undefined /*out*/;
            inputs["timeGrain"] = undefined /*out*/;
            inputs["timePeriod"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:consumption/latest:BudgetByResourceGroupName" }, { type: "azure-nextgen:consumption/v20180131:BudgetByResourceGroupName" }, { type: "azure-nextgen:consumption/v20180331:BudgetByResourceGroupName" }, { type: "azure-nextgen:consumption/v20180831:BudgetByResourceGroupName" }, { type: "azure-nextgen:consumption/v20181001:BudgetByResourceGroupName" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(BudgetByResourceGroupName.__pulumiType, name, inputs, opts);
    }
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
    readonly category: pulumi.Input<string | enums.consumption.v20180630.CategoryType>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * May be used to filter budgets by resource group, resource, or meter.
     */
    readonly filters?: pulumi.Input<inputs.consumption.v20180630.Filters>;
    /**
     * Dictionary of notifications associated with the budget. Budget can have up to five notifications.
     */
    readonly notifications?: pulumi.Input<{[key: string]: pulumi.Input<inputs.consumption.v20180630.Notification>}>;
    /**
     * Azure Resource Group Name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain.
     */
    readonly timeGrain: pulumi.Input<string | enums.consumption.v20180630.TimeGrainType>;
    /**
     * Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should  be selected within the timegrain period. There are no restrictions on the end date.
     */
    readonly timePeriod: pulumi.Input<inputs.consumption.v20180630.BudgetTimePeriod>;
}
