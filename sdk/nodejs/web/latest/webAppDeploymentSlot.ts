// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * User credentials used for publishing activity.
 * Latest API Version: 2020-09-01.
 */
export class WebAppDeploymentSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppDeploymentSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppDeploymentSlot {
        return new WebAppDeploymentSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:web/latest:WebAppDeploymentSlot';

    /**
     * Returns true if the given object is an instance of WebAppDeploymentSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppDeploymentSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppDeploymentSlot.__pulumiType;
    }

    /**
     * True if deployment is currently active, false if completed and null if not started.
     */
    public readonly active!: pulumi.Output<boolean | undefined>;
    /**
     * Who authored the deployment.
     */
    public readonly author!: pulumi.Output<string | undefined>;
    /**
     * Author email.
     */
    public readonly authorEmail!: pulumi.Output<string | undefined>;
    /**
     * Who performed the deployment.
     */
    public readonly deployer!: pulumi.Output<string | undefined>;
    /**
     * Details on deployment.
     */
    public readonly details!: pulumi.Output<string | undefined>;
    /**
     * End time.
     */
    public readonly endTime!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Details about deployment status.
     */
    public readonly message!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Start time.
     */
    public readonly startTime!: pulumi.Output<string | undefined>;
    /**
     * Deployment status.
     */
    public readonly status!: pulumi.Output<number | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<outputs.web.latest.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppDeploymentSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppDeploymentSlotArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.id === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'id'");
            }
            if ((!args || args.name === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.slot === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'slot'");
            }
            inputs["active"] = args ? args.active : undefined;
            inputs["author"] = args ? args.author : undefined;
            inputs["authorEmail"] = args ? args.authorEmail : undefined;
            inputs["deployer"] = args ? args.deployer : undefined;
            inputs["details"] = args ? args.details : undefined;
            inputs["endTime"] = args ? args.endTime : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["message"] = args ? args.message : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["slot"] = args ? args.slot : undefined;
            inputs["startTime"] = args ? args.startTime : undefined;
            inputs["status"] = args ? args.status : undefined;
            inputs["systemData"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["active"] = undefined /*out*/;
            inputs["author"] = undefined /*out*/;
            inputs["authorEmail"] = undefined /*out*/;
            inputs["deployer"] = undefined /*out*/;
            inputs["details"] = undefined /*out*/;
            inputs["endTime"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["message"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["startTime"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:web/v20150801:WebAppDeploymentSlot" }, { type: "azure-nextgen:web/v20160801:WebAppDeploymentSlot" }, { type: "azure-nextgen:web/v20180201:WebAppDeploymentSlot" }, { type: "azure-nextgen:web/v20181101:WebAppDeploymentSlot" }, { type: "azure-nextgen:web/v20190801:WebAppDeploymentSlot" }, { type: "azure-nextgen:web/v20200601:WebAppDeploymentSlot" }, { type: "azure-nextgen:web/v20200901:WebAppDeploymentSlot" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(WebAppDeploymentSlot.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppDeploymentSlot resource.
 */
export interface WebAppDeploymentSlotArgs {
    /**
     * True if deployment is currently active, false if completed and null if not started.
     */
    readonly active?: pulumi.Input<boolean>;
    /**
     * Who authored the deployment.
     */
    readonly author?: pulumi.Input<string>;
    /**
     * Author email.
     */
    readonly authorEmail?: pulumi.Input<string>;
    /**
     * Who performed the deployment.
     */
    readonly deployer?: pulumi.Input<string>;
    /**
     * Details on deployment.
     */
    readonly details?: pulumi.Input<string>;
    /**
     * End time.
     */
    readonly endTime?: pulumi.Input<string>;
    /**
     * ID of an existing deployment.
     */
    readonly id: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Details about deployment status.
     */
    readonly message?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API creates a deployment for the production slot.
     */
    readonly slot: pulumi.Input<string>;
    /**
     * Start time.
     */
    readonly startTime?: pulumi.Input<string>;
    /**
     * Deployment status.
     */
    readonly status?: pulumi.Input<number>;
}
