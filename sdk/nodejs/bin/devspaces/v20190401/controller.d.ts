import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
export declare class Controller extends pulumi.CustomResource {
    /**
     * Get an existing Controller resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Controller;
    /**
     * Returns true if the given object is an instance of Controller.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Controller;
    /**
     * DNS name for accessing DataPlane services
     */
    readonly dataPlaneFqdn: pulumi.Output<string>;
    /**
     * DNS suffix for public endpoints running in the Azure Dev Spaces Controller.
     */
    readonly hostSuffix: pulumi.Output<string>;
    /**
     * Region where the Azure resource is located.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Provisioning state of the Azure Dev Spaces Controller.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Model representing SKU for Azure Dev Spaces Controller.
     */
    readonly sku: pulumi.Output<outputs.devspaces.v20190401.SkuResponse>;
    /**
     * Tags for the Azure resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * DNS of the target container host's API server
     */
    readonly targetContainerHostApiServerFqdn: pulumi.Output<string>;
    /**
     * Credentials of the target container host (base64).
     */
    readonly targetContainerHostCredentialsBase64: pulumi.Output<string>;
    /**
     * Resource ID of the target container host
     */
    readonly targetContainerHostResourceId: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Controller resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ControllerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Controller resource.
 */
export interface ControllerArgs {
    /**
     * Region where the Azure resource is located.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Name of the resource.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Model representing SKU for Azure Dev Spaces Controller.
     */
    readonly sku: pulumi.Input<inputs.devspaces.v20190401.Sku>;
    /**
     * Tags for the Azure resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Credentials of the target container host (base64).
     */
    readonly targetContainerHostCredentialsBase64: pulumi.Input<string>;
    /**
     * Resource ID of the target container host
     */
    readonly targetContainerHostResourceId: pulumi.Input<string>;
}
