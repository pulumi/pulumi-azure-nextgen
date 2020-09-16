import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The integration service environment.
 */
export declare class IntegrationServiceEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationServiceEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationServiceEnvironment;
    /**
     * Returns true if the given object is an instance of IntegrationServiceEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationServiceEnvironment;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Gets the resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The integration service environment properties.
     */
    readonly properties: pulumi.Output<outputs.logic.v20190501.IntegrationServiceEnvironmentPropertiesResponse>;
    /**
     * The sku.
     */
    readonly sku: pulumi.Output<outputs.logic.v20190501.IntegrationServiceEnvironmentSkuResponse | undefined>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets the resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a IntegrationServiceEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationServiceEnvironmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a IntegrationServiceEnvironment resource.
 */
export interface IntegrationServiceEnvironmentArgs {
    /**
     * The integration service environment name.
     */
    readonly integrationServiceEnvironmentName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The integration service environment properties.
     */
    readonly properties?: pulumi.Input<inputs.logic.v20190501.IntegrationServiceEnvironmentProperties>;
    /**
     * The resource group.
     */
    readonly resourceGroup: pulumi.Input<string>;
    /**
     * The sku.
     */
    readonly sku?: pulumi.Input<inputs.logic.v20190501.IntegrationServiceEnvironmentSku>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
