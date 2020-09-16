import * as pulumi from "@pulumi/pulumi";
/**
 * Server communication link.
 */
export declare class ServerCommunicationLink extends pulumi.CustomResource {
    /**
     * Get an existing ServerCommunicationLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerCommunicationLink;
    /**
     * Returns true if the given object is an instance of ServerCommunicationLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServerCommunicationLink;
    /**
     * Communication link kind.  This property is used for Azure Portal metadata.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Communication link location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the partner server.
     */
    readonly partnerServer: pulumi.Output<string>;
    /**
     * The state.
     */
    readonly state: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ServerCommunicationLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerCommunicationLinkArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ServerCommunicationLink resource.
 */
export interface ServerCommunicationLinkArgs {
    /**
     * The name of the server communication link.
     */
    readonly communicationLinkName: pulumi.Input<string>;
    /**
     * The name of the partner server.
     */
    readonly partnerServer: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
}
