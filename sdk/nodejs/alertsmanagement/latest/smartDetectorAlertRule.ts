// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The alert rule information
 * Latest API Version: 2019-06-01.
 */
export class SmartDetectorAlertRule extends pulumi.CustomResource {
    /**
     * Get an existing SmartDetectorAlertRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SmartDetectorAlertRule {
        return new SmartDetectorAlertRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:alertsmanagement/latest:SmartDetectorAlertRule';

    /**
     * Returns true if the given object is an instance of SmartDetectorAlertRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SmartDetectorAlertRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SmartDetectorAlertRule.__pulumiType;
    }

    /**
     * The alert rule actions.
     */
    public readonly actionGroups!: pulumi.Output<outputs.alertsmanagement.latest.ActionGroupsInformationResponse>;
    /**
     * The alert rule description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The alert rule's detector.
     */
    public readonly detector!: pulumi.Output<outputs.alertsmanagement.latest.DetectorResponse>;
    /**
     * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
     */
    public readonly frequency!: pulumi.Output<string>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The alert rule resources scope.
     */
    public readonly scope!: pulumi.Output<string[]>;
    /**
     * The alert rule severity.
     */
    public readonly severity!: pulumi.Output<string>;
    /**
     * The alert rule state.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<any | undefined>;
    /**
     * The alert rule throttling information.
     */
    public readonly throttling!: pulumi.Output<outputs.alertsmanagement.latest.ThrottlingInformationResponse | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SmartDetectorAlertRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SmartDetectorAlertRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.actionGroups === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'actionGroups'");
            }
            if ((!args || args.alertRuleName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'alertRuleName'");
            }
            if ((!args || args.detector === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'detector'");
            }
            if ((!args || args.frequency === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'frequency'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scope === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'scope'");
            }
            if ((!args || args.severity === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'severity'");
            }
            if ((!args || args.state === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'state'");
            }
            inputs["actionGroups"] = args ? args.actionGroups : undefined;
            inputs["alertRuleName"] = args ? args.alertRuleName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["detector"] = args ? args.detector : undefined;
            inputs["frequency"] = args ? args.frequency : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["scope"] = args ? args.scope : undefined;
            inputs["severity"] = args ? args.severity : undefined;
            inputs["state"] = args ? args.state : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["throttling"] = args ? args.throttling : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["actionGroups"] = undefined /*out*/;
            inputs["description"] = undefined /*out*/;
            inputs["detector"] = undefined /*out*/;
            inputs["frequency"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["scope"] = undefined /*out*/;
            inputs["severity"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["throttling"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:alertsmanagement/v20190301:SmartDetectorAlertRule" }, { type: "azure-nextgen:alertsmanagement/v20190601:SmartDetectorAlertRule" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(SmartDetectorAlertRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a SmartDetectorAlertRule resource.
 */
export interface SmartDetectorAlertRuleArgs {
    /**
     * The alert rule actions.
     */
    readonly actionGroups: pulumi.Input<inputs.alertsmanagement.latest.ActionGroupsInformation>;
    /**
     * The name of the alert rule.
     */
    readonly alertRuleName: pulumi.Input<string>;
    /**
     * The alert rule description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The alert rule's detector.
     */
    readonly detector: pulumi.Input<inputs.alertsmanagement.latest.Detector>;
    /**
     * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
     */
    readonly frequency: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The alert rule resources scope.
     */
    readonly scope: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The alert rule severity.
     */
    readonly severity: pulumi.Input<string | enums.alertsmanagement.latest.Severity>;
    /**
     * The alert rule state.
     */
    readonly state: pulumi.Input<string | enums.alertsmanagement.latest.AlertRuleState>;
    /**
     * The resource tags.
     */
    readonly tags?: any;
    /**
     * The alert rule throttling information.
     */
    readonly throttling?: pulumi.Input<inputs.alertsmanagement.latest.ThrottlingInformation>;
}
