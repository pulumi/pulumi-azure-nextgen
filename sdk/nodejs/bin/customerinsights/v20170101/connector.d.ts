import * as pulumi from "@pulumi/pulumi";
/**
 * The connector resource format.
 */
export declare class Connector extends pulumi.CustomResource {
    /**
     * Get an existing Connector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Connector;
    /**
     * Returns true if the given object is an instance of Connector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Connector;
    /**
     * ID of the connector.
     */
    readonly connectorId: pulumi.Output<number>;
    /**
     * Name of the connector.
     */
    readonly connectorName: pulumi.Output<string | undefined>;
    /**
     * The connector properties.
     */
    readonly connectorProperties: pulumi.Output<{
        [key: string]: {
            [key: string]: any;
        };
    }>;
    /**
     * Type of connector.
     */
    readonly connectorType: pulumi.Output<string>;
    /**
     * The created time.
     */
    readonly created: pulumi.Output<string>;
    /**
     * Description of the connector.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Display name of the connector.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * If this is an internal connector.
     */
    readonly isInternal: pulumi.Output<boolean | undefined>;
    /**
     * The last modified time.
     */
    readonly lastModified: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * State of connector.
     */
    readonly state: pulumi.Output<string>;
    /**
     * The hub name.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Connector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectorArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Connector resource.
 */
export interface ConnectorArgs {
    /**
     * Name of the connector.
     */
    readonly connectorName: pulumi.Input<string>;
    /**
     * The connector properties.
     */
    readonly connectorProperties: pulumi.Input<{
        [key: string]: pulumi.Input<{
            [key: string]: any;
        }>;
    }>;
    /**
     * Type of connector.
     */
    readonly connectorType: pulumi.Input<string>;
    /**
     * Description of the connector.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Display name of the connector.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The name of the hub.
     */
    readonly hubName: pulumi.Input<string>;
    /**
     * If this is an internal connector.
     */
    readonly isInternal?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
