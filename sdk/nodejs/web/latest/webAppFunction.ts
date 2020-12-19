// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Function information.
 * Latest API Version: 2020-09-01.
 */
export class WebAppFunction extends pulumi.CustomResource {
    /**
     * Get an existing WebAppFunction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppFunction {
        return new WebAppFunction(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:web/latest:WebAppFunction';

    /**
     * Returns true if the given object is an instance of WebAppFunction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppFunction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppFunction.__pulumiType;
    }

    /**
     * Config information.
     */
    public readonly config!: pulumi.Output<any | undefined>;
    /**
     * Config URI.
     */
    public readonly configHref!: pulumi.Output<string | undefined>;
    /**
     * File list.
     */
    public readonly files!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Function App ID.
     */
    public readonly functionAppId!: pulumi.Output<string | undefined>;
    /**
     * Function URI.
     */
    public readonly href!: pulumi.Output<string | undefined>;
    /**
     * The invocation URL
     */
    public readonly invokeUrlTemplate!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets a value indicating whether the function is disabled
     */
    public readonly isDisabled!: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The function language
     */
    public readonly language!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Script URI.
     */
    public readonly scriptHref!: pulumi.Output<string | undefined>;
    /**
     * Script root path URI.
     */
    public readonly scriptRootPathHref!: pulumi.Output<string | undefined>;
    /**
     * Secrets file URI.
     */
    public readonly secretsFileHref!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<outputs.web.latest.SystemDataResponse>;
    /**
     * Test data used when testing via the Azure Portal.
     */
    public readonly testData!: pulumi.Output<string | undefined>;
    /**
     * Test data URI.
     */
    public readonly testDataHref!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppFunction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppFunctionArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.functionName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'functionName'");
            }
            if ((!args || args.name === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["config"] = args ? args.config : undefined;
            inputs["configHref"] = args ? args.configHref : undefined;
            inputs["files"] = args ? args.files : undefined;
            inputs["functionAppId"] = args ? args.functionAppId : undefined;
            inputs["functionName"] = args ? args.functionName : undefined;
            inputs["href"] = args ? args.href : undefined;
            inputs["invokeUrlTemplate"] = args ? args.invokeUrlTemplate : undefined;
            inputs["isDisabled"] = args ? args.isDisabled : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["language"] = args ? args.language : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["scriptHref"] = args ? args.scriptHref : undefined;
            inputs["scriptRootPathHref"] = args ? args.scriptRootPathHref : undefined;
            inputs["secretsFileHref"] = args ? args.secretsFileHref : undefined;
            inputs["testData"] = args ? args.testData : undefined;
            inputs["testDataHref"] = args ? args.testDataHref : undefined;
            inputs["systemData"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["config"] = undefined /*out*/;
            inputs["configHref"] = undefined /*out*/;
            inputs["files"] = undefined /*out*/;
            inputs["functionAppId"] = undefined /*out*/;
            inputs["href"] = undefined /*out*/;
            inputs["invokeUrlTemplate"] = undefined /*out*/;
            inputs["isDisabled"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["language"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["scriptHref"] = undefined /*out*/;
            inputs["scriptRootPathHref"] = undefined /*out*/;
            inputs["secretsFileHref"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["testData"] = undefined /*out*/;
            inputs["testDataHref"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:web/v20160801:WebAppFunction" }, { type: "azure-nextgen:web/v20180201:WebAppFunction" }, { type: "azure-nextgen:web/v20181101:WebAppFunction" }, { type: "azure-nextgen:web/v20190801:WebAppFunction" }, { type: "azure-nextgen:web/v20200601:WebAppFunction" }, { type: "azure-nextgen:web/v20200901:WebAppFunction" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(WebAppFunction.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppFunction resource.
 */
export interface WebAppFunctionArgs {
    /**
     * Config information.
     */
    readonly config?: any;
    /**
     * Config URI.
     */
    readonly configHref?: pulumi.Input<string>;
    /**
     * File list.
     */
    readonly files?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Function App ID.
     */
    readonly functionAppId?: pulumi.Input<string>;
    /**
     * Function name.
     */
    readonly functionName: pulumi.Input<string>;
    /**
     * Function URI.
     */
    readonly href?: pulumi.Input<string>;
    /**
     * The invocation URL
     */
    readonly invokeUrlTemplate?: pulumi.Input<string>;
    /**
     * Gets or sets a value indicating whether the function is disabled
     */
    readonly isDisabled?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * The function language
     */
    readonly language?: pulumi.Input<string>;
    /**
     * Site name.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Script URI.
     */
    readonly scriptHref?: pulumi.Input<string>;
    /**
     * Script root path URI.
     */
    readonly scriptRootPathHref?: pulumi.Input<string>;
    /**
     * Secrets file URI.
     */
    readonly secretsFileHref?: pulumi.Input<string>;
    /**
     * Test data used when testing via the Azure Portal.
     */
    readonly testData?: pulumi.Input<string>;
    /**
     * Test data URI.
     */
    readonly testDataHref?: pulumi.Input<string>;
}
