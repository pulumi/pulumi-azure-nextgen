import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The application resource.
 */
export declare class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Application;
    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Application;
    /**
     * Azure resource etag.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Describes the managed identities for an Azure resource.
     */
    readonly identity: pulumi.Output<outputs.servicefabric.v20200301.ManagedIdentityResponse | undefined>;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * List of user assigned identities for the application, each mapped to a friendly name.
     */
    readonly managedIdentities: pulumi.Output<outputs.servicefabric.v20200301.ApplicationUserAssignedIdentityResponse[] | undefined>;
    /**
     * The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
     */
    readonly maximumNodes: pulumi.Output<number | undefined>;
    /**
     * List of application capacity metric description.
     */
    readonly metrics: pulumi.Output<outputs.servicefabric.v20200301.ApplicationMetricDescriptionResponse[] | undefined>;
    /**
     * The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
     */
    readonly minimumNodes: pulumi.Output<number | undefined>;
    /**
     * Azure resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of application parameters with overridden values from their default values specified in the application manifest.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Remove the current application capacity settings.
     */
    readonly removeApplicationCapacity: pulumi.Output<boolean | undefined>;
    /**
     * Azure resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Azure resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The application type name as defined in the application manifest.
     */
    readonly typeName: pulumi.Output<string | undefined>;
    /**
     * The version of the application type as defined in the application manifest.
     */
    readonly typeVersion: pulumi.Output<string | undefined>;
    /**
     * Describes the policy for a monitored application upgrade.
     */
    readonly upgradePolicy: pulumi.Output<outputs.servicefabric.v20200301.ApplicationUpgradePolicyResponse | undefined>;
    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The name of the application resource.
     */
    readonly applicationName: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * Describes the managed identities for an Azure resource.
     */
    readonly identity?: pulumi.Input<inputs.servicefabric.v20200301.ManagedIdentity>;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * List of user assigned identities for the application, each mapped to a friendly name.
     */
    readonly managedIdentities?: pulumi.Input<pulumi.Input<inputs.servicefabric.v20200301.ApplicationUserAssignedIdentity>[]>;
    /**
     * The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
     */
    readonly maximumNodes?: pulumi.Input<number>;
    /**
     * List of application capacity metric description.
     */
    readonly metrics?: pulumi.Input<pulumi.Input<inputs.servicefabric.v20200301.ApplicationMetricDescription>[]>;
    /**
     * The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
     */
    readonly minimumNodes?: pulumi.Input<number>;
    /**
     * List of application parameters with overridden values from their default values specified in the application manifest.
     */
    readonly parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Remove the current application capacity settings.
     */
    readonly removeApplicationCapacity?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Azure resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The application type name as defined in the application manifest.
     */
    readonly typeName?: pulumi.Input<string>;
    /**
     * The version of the application type as defined in the application manifest.
     */
    readonly typeVersion?: pulumi.Input<string>;
    /**
     * Describes the policy for a monitored application upgrade.
     */
    readonly upgradePolicy?: pulumi.Input<inputs.servicefabric.v20200301.ApplicationUpgradePolicy>;
}
