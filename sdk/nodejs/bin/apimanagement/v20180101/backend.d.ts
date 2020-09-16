import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Backend details.
 */
export declare class Backend extends pulumi.CustomResource {
    /**
     * Get an existing Backend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Backend;
    /**
     * Returns true if the given object is an instance of Backend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Backend;
    /**
     * Backend Credentials Contract Properties
     */
    readonly credentials: pulumi.Output<outputs.apimanagement.v20180101.BackendCredentialsContractResponse | undefined>;
    /**
     * Backend Description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Backend Properties contract
     */
    readonly properties: pulumi.Output<outputs.apimanagement.v20180101.BackendPropertiesResponse>;
    /**
     * Backend communication protocol.
     */
    readonly protocol: pulumi.Output<string>;
    /**
     * Backend Proxy Contract Properties
     */
    readonly proxy: pulumi.Output<outputs.apimanagement.v20180101.BackendProxyContractResponse | undefined>;
    /**
     * Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
     */
    readonly resourceId: pulumi.Output<string | undefined>;
    /**
     * Backend Title.
     */
    readonly title: pulumi.Output<string | undefined>;
    /**
     * Backend TLS Properties
     */
    readonly tls: pulumi.Output<outputs.apimanagement.v20180101.BackendTlsPropertiesResponse | undefined>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Runtime Url of the Backend.
     */
    readonly url: pulumi.Output<string>;
    /**
     * Create a Backend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackendArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Backend resource.
 */
export interface BackendArgs {
    /**
     * Identifier of the Backend entity. Must be unique in the current API Management service instance.
     */
    readonly backendid: pulumi.Input<string>;
    /**
     * Backend Credentials Contract Properties
     */
    readonly credentials?: pulumi.Input<inputs.apimanagement.v20180101.BackendCredentialsContract>;
    /**
     * Backend Description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Backend Properties contract
     */
    readonly properties?: pulumi.Input<inputs.apimanagement.v20180101.BackendProperties>;
    /**
     * Backend communication protocol.
     */
    readonly protocol: pulumi.Input<string>;
    /**
     * Backend Proxy Contract Properties
     */
    readonly proxy?: pulumi.Input<inputs.apimanagement.v20180101.BackendProxyContract>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
     */
    readonly resourceId?: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Backend Title.
     */
    readonly title?: pulumi.Input<string>;
    /**
     * Backend TLS Properties
     */
    readonly tls?: pulumi.Input<inputs.apimanagement.v20180101.BackendTlsProperties>;
    /**
     * Runtime Url of the Backend.
     */
    readonly url: pulumi.Input<string>;
}
