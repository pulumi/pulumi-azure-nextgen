// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * A hostname binding object.
 * Latest API Version: 2020-09-01.
 */
export class WebAppHostNameBinding extends pulumi.CustomResource {
    /**
     * Get an existing WebAppHostNameBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppHostNameBinding {
        return new WebAppHostNameBinding(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:web/latest:WebAppHostNameBinding';

    /**
     * Returns true if the given object is an instance of WebAppHostNameBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppHostNameBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppHostNameBinding.__pulumiType;
    }

    /**
     * Azure resource name.
     */
    public readonly azureResourceName!: pulumi.Output<string | undefined>;
    /**
     * Azure resource type.
     */
    public readonly azureResourceType!: pulumi.Output<string | undefined>;
    /**
     * Custom DNS record type.
     */
    public readonly customHostNameDnsRecordType!: pulumi.Output<string | undefined>;
    /**
     * Fully qualified ARM domain resource URI.
     */
    public readonly domainId!: pulumi.Output<string | undefined>;
    /**
     * Hostname type.
     */
    public readonly hostNameType!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * App Service app name.
     */
    public readonly siteName!: pulumi.Output<string | undefined>;
    /**
     * SSL type
     */
    public readonly sslState!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<outputs.web.latest.SystemDataResponse>;
    /**
     * SSL certificate thumbprint
     */
    public readonly thumbprint!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Virtual IP address assigned to the hostname if IP based SSL is enabled.
     */
    public /*out*/ readonly virtualIP!: pulumi.Output<string>;

    /**
     * Create a WebAppHostNameBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppHostNameBindingArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.hostName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'hostName'");
            }
            if ((!args || args.name === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["azureResourceName"] = args ? args.azureResourceName : undefined;
            inputs["azureResourceType"] = args ? args.azureResourceType : undefined;
            inputs["customHostNameDnsRecordType"] = args ? args.customHostNameDnsRecordType : undefined;
            inputs["domainId"] = args ? args.domainId : undefined;
            inputs["hostName"] = args ? args.hostName : undefined;
            inputs["hostNameType"] = args ? args.hostNameType : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["siteName"] = args ? args.siteName : undefined;
            inputs["sslState"] = args ? args.sslState : undefined;
            inputs["thumbprint"] = args ? args.thumbprint : undefined;
            inputs["systemData"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["virtualIP"] = undefined /*out*/;
        } else {
            inputs["azureResourceName"] = undefined /*out*/;
            inputs["azureResourceType"] = undefined /*out*/;
            inputs["customHostNameDnsRecordType"] = undefined /*out*/;
            inputs["domainId"] = undefined /*out*/;
            inputs["hostNameType"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["siteName"] = undefined /*out*/;
            inputs["sslState"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["thumbprint"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["virtualIP"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:web/v20150801:WebAppHostNameBinding" }, { type: "azure-nextgen:web/v20160801:WebAppHostNameBinding" }, { type: "azure-nextgen:web/v20180201:WebAppHostNameBinding" }, { type: "azure-nextgen:web/v20181101:WebAppHostNameBinding" }, { type: "azure-nextgen:web/v20190801:WebAppHostNameBinding" }, { type: "azure-nextgen:web/v20200601:WebAppHostNameBinding" }, { type: "azure-nextgen:web/v20200901:WebAppHostNameBinding" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(WebAppHostNameBinding.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppHostNameBinding resource.
 */
export interface WebAppHostNameBindingArgs {
    /**
     * Azure resource name.
     */
    readonly azureResourceName?: pulumi.Input<string>;
    /**
     * Azure resource type.
     */
    readonly azureResourceType?: pulumi.Input<enums.web.latest.AzureResourceType>;
    /**
     * Custom DNS record type.
     */
    readonly customHostNameDnsRecordType?: pulumi.Input<enums.web.latest.CustomHostNameDnsRecordType>;
    /**
     * Fully qualified ARM domain resource URI.
     */
    readonly domainId?: pulumi.Input<string>;
    /**
     * Hostname in the hostname binding.
     */
    readonly hostName: pulumi.Input<string>;
    /**
     * Hostname type.
     */
    readonly hostNameType?: pulumi.Input<enums.web.latest.HostNameType>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * App Service app name.
     */
    readonly siteName?: pulumi.Input<string>;
    /**
     * SSL type
     */
    readonly sslState?: pulumi.Input<enums.web.latest.SslState>;
    /**
     * SSL certificate thumbprint
     */
    readonly thumbprint?: pulumi.Input<string>;
}
