import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An object that represents a machine learning workspace.
 */
export declare class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Workspace;
    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Workspace;
    /**
     * The flag to indicate whether to allow public access when behind VNet.
     */
    readonly allowPublicAccessWhenBehindVnet: pulumi.Output<boolean | undefined>;
    /**
     * ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly applicationInsights: pulumi.Output<string | undefined>;
    /**
     * ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly containerRegistry: pulumi.Output<string | undefined>;
    /**
     * The creation time of the machine learning workspace in ISO8601 format.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * The description of this workspace.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Url for the discovery service to identify regional endpoints for machine learning experimentation services
     */
    readonly discoveryUrl: pulumi.Output<string | undefined>;
    /**
     * The encryption settings of Azure ML workspace.
     */
    readonly encryption: pulumi.Output<outputs.machinelearningservices.v20200401.EncryptionPropertyResponse | undefined>;
    /**
     * The friendly name for this workspace. This name in mutable
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
     */
    readonly hbiWorkspace: pulumi.Output<boolean | undefined>;
    /**
     * The identity of the resource.
     */
    readonly identity: pulumi.Output<outputs.machinelearningservices.v20200401.IdentityResponse | undefined>;
    /**
     * The compute name for image build
     */
    readonly imageBuildCompute: pulumi.Output<string | undefined>;
    /**
     * ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly keyVault: pulumi.Output<string | undefined>;
    /**
     * Specifies the location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The notebook info of Azure ML workspace.
     */
    readonly notebookInfo: pulumi.Output<outputs.machinelearningservices.v20200401.NotebookResourceInfoResponse>;
    /**
     * The list of private endpoint connections in the workspace.
     */
    readonly privateEndpointConnections: pulumi.Output<outputs.machinelearningservices.v20200401.PrivateEndpointConnectionResponse[]>;
    /**
     * Count of private connections in the workspace
     */
    readonly privateLinkCount: pulumi.Output<number>;
    /**
     * The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
     */
    readonly serviceProvisionedResourceGroup: pulumi.Output<string>;
    /**
     * The list of shared private link resources in this workspace.
     */
    readonly sharedPrivateLinkResources: pulumi.Output<outputs.machinelearningservices.v20200401.SharedPrivateLinkResourceResponse[] | undefined>;
    /**
     * The sku of the workspace.
     */
    readonly sku: pulumi.Output<outputs.machinelearningservices.v20200401.SkuResponse | undefined>;
    /**
     * ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly storageAccount: pulumi.Output<string | undefined>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The immutable id associated with this workspace.
     */
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * The flag to indicate whether to allow public access when behind VNet.
     */
    readonly allowPublicAccessWhenBehindVnet?: pulumi.Input<boolean>;
    /**
     * ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly applicationInsights?: pulumi.Input<string>;
    /**
     * ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly containerRegistry?: pulumi.Input<string>;
    /**
     * The description of this workspace.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Url for the discovery service to identify regional endpoints for machine learning experimentation services
     */
    readonly discoveryUrl?: pulumi.Input<string>;
    /**
     * The encryption settings of Azure ML workspace.
     */
    readonly encryption?: pulumi.Input<inputs.machinelearningservices.v20200401.EncryptionProperty>;
    /**
     * The friendly name for this workspace. This name in mutable
     */
    readonly friendlyName?: pulumi.Input<string>;
    /**
     * The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
     */
    readonly hbiWorkspace?: pulumi.Input<boolean>;
    /**
     * The identity of the resource.
     */
    readonly identity?: pulumi.Input<inputs.machinelearningservices.v20200401.Identity>;
    /**
     * The compute name for image build
     */
    readonly imageBuildCompute?: pulumi.Input<string>;
    /**
     * ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly keyVault?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Name of the resource group in which workspace is located.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The list of shared private link resources in this workspace.
     */
    readonly sharedPrivateLinkResources?: pulumi.Input<pulumi.Input<inputs.machinelearningservices.v20200401.SharedPrivateLinkResource>[]>;
    /**
     * The sku of the workspace.
     */
    readonly sku?: pulumi.Input<inputs.machinelearningservices.v20200401.Sku>;
    /**
     * ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
     */
    readonly storageAccount?: pulumi.Input<string>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
}
