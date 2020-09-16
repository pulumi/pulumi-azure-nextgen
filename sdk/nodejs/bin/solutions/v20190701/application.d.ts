import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Information about managed application.
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
     * The fully qualified path of managed application definition Id.
     */
    readonly applicationDefinitionId: pulumi.Output<string | undefined>;
    /**
     * The collection of managed application artifacts.
     */
    readonly artifacts: pulumi.Output<outputs.solutions.v20190701.ApplicationArtifactResponse[]>;
    /**
     * The  read-only authorizations property that is retrieved from the application package.
     */
    readonly authorizations: pulumi.Output<outputs.solutions.v20190701.ApplicationAuthorizationResponse[]>;
    /**
     * The managed application billing details.
     */
    readonly billingDetails: pulumi.Output<outputs.solutions.v20190701.ApplicationBillingDetailsDefinitionResponse>;
    /**
     * The client entity that created the JIT request.
     */
    readonly createdBy: pulumi.Output<outputs.solutions.v20190701.ApplicationClientDetailsResponse>;
    /**
     * The read-only customer support property that is retrieved from the application package.
     */
    readonly customerSupport: pulumi.Output<outputs.solutions.v20190701.ApplicationPackageContactResponse>;
    /**
     * The identity of the resource.
     */
    readonly identity: pulumi.Output<outputs.solutions.v20190701.IdentityResponse | undefined>;
    /**
     * The managed application Jit access policy.
     */
    readonly jitAccessPolicy: pulumi.Output<outputs.solutions.v20190701.ApplicationJitAccessPolicyResponse | undefined>;
    /**
     * The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * ID of the resource that manages this resource.
     */
    readonly managedBy: pulumi.Output<string | undefined>;
    /**
     * The managed resource group Id.
     */
    readonly managedResourceGroupId: pulumi.Output<string | undefined>;
    /**
     * The managed application management mode.
     */
    readonly managementMode: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Name and value pairs that define the managed application outputs.
     */
    readonly outputs: pulumi.Output<{
        [key: string]: any;
    }>;
    /**
     * Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The plan information.
     */
    readonly plan: pulumi.Output<outputs.solutions.v20190701.PlanResponse | undefined>;
    /**
     * The managed application provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The publisher tenant Id.
     */
    readonly publisherTenantId: pulumi.Output<string>;
    /**
     * The SKU of the resource.
     */
    readonly sku: pulumi.Output<outputs.solutions.v20190701.SkuResponse | undefined>;
    /**
     * The read-only support URLs property that is retrieved from the application package.
     */
    readonly supportUrls: pulumi.Output<outputs.solutions.v20190701.ApplicationPackageSupportUrlsResponse>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * The client entity that last updated the JIT request.
     */
    readonly updatedBy: pulumi.Output<outputs.solutions.v20190701.ApplicationClientDetailsResponse>;
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
     * The fully qualified path of managed application definition Id.
     */
    readonly applicationDefinitionId?: pulumi.Input<string>;
    /**
     * The name of the managed application.
     */
    readonly applicationName: pulumi.Input<string>;
    /**
     * The identity of the resource.
     */
    readonly identity?: pulumi.Input<inputs.solutions.v20190701.Identity>;
    /**
     * The managed application Jit access policy.
     */
    readonly jitAccessPolicy?: pulumi.Input<inputs.solutions.v20190701.ApplicationJitAccessPolicy>;
    /**
     * The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
     */
    readonly kind: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * ID of the resource that manages this resource.
     */
    readonly managedBy?: pulumi.Input<string>;
    /**
     * The managed resource group Id.
     */
    readonly managedResourceGroupId?: pulumi.Input<string>;
    /**
     * Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
     */
    readonly parameters?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The plan information.
     */
    readonly plan?: pulumi.Input<inputs.solutions.v20190701.Plan>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the resource.
     */
    readonly sku?: pulumi.Input<inputs.solutions.v20190701.Sku>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
