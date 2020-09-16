import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * The managed api definition.
 */
export declare class IntegrationServiceEnvironmentManagedApi extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationServiceEnvironmentManagedApi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationServiceEnvironmentManagedApi;
    /**
     * Returns true if the given object is an instance of IntegrationServiceEnvironmentManagedApi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationServiceEnvironmentManagedApi;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Gets the resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The api resource properties.
     */
    readonly properties: pulumi.Output<outputs.logic.v20190501.ApiResourcePropertiesResponse>;
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
     * Create a IntegrationServiceEnvironmentManagedApi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationServiceEnvironmentManagedApiArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a IntegrationServiceEnvironmentManagedApi resource.
 */
export interface IntegrationServiceEnvironmentManagedApiArgs {
    /**
     * The api name.
     */
    readonly apiName: pulumi.Input<string>;
    /**
     * The integration service environment name.
     */
    readonly integrationServiceEnvironmentName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroup: pulumi.Input<string>;
}
