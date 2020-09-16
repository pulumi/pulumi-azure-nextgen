import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The connector mapping resource format.
 */
export declare class ConnectorMapping extends pulumi.CustomResource {
    /**
     * Get an existing ConnectorMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectorMapping;
    /**
     * Returns true if the given object is an instance of ConnectorMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectorMapping;
    /**
     * The connector mapping name
     */
    readonly connectorMappingName: pulumi.Output<string>;
    /**
     * The connector name.
     */
    readonly connectorName: pulumi.Output<string>;
    /**
     * Type of connector.
     */
    readonly connectorType: pulumi.Output<string | undefined>;
    /**
     * The created time.
     */
    readonly created: pulumi.Output<string>;
    /**
     * The DataFormat ID.
     */
    readonly dataFormatId: pulumi.Output<string>;
    /**
     * The description of the connector mapping.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Display name for the connector mapping.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * Defines which entity type the file should map to.
     */
    readonly entityType: pulumi.Output<string>;
    /**
     * The mapping entity name.
     */
    readonly entityTypeName: pulumi.Output<string>;
    /**
     * The last modified time.
     */
    readonly lastModified: pulumi.Output<string>;
    /**
     * The properties of the mapping.
     */
    readonly mappingProperties: pulumi.Output<outputs.customerinsights.v20170101.ConnectorMappingPropertiesResponse>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The next run time based on customer's settings.
     */
    readonly nextRunTime: pulumi.Output<string>;
    /**
     * The RunId.
     */
    readonly runId: pulumi.Output<string>;
    /**
     * State of connector mapping.
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
     * Create a ConnectorMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectorMappingArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ConnectorMapping resource.
 */
export interface ConnectorMappingArgs {
    /**
     * The name of the connector.
     */
    readonly connectorName: pulumi.Input<string>;
    /**
     * Type of connector.
     */
    readonly connectorType?: pulumi.Input<string>;
    /**
     * The description of the connector mapping.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Display name for the connector mapping.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * Defines which entity type the file should map to.
     */
    readonly entityType: pulumi.Input<string>;
    /**
     * The mapping entity name.
     */
    readonly entityTypeName: pulumi.Input<string>;
    /**
     * The name of the hub.
     */
    readonly hubName: pulumi.Input<string>;
    /**
     * The name of the connector mapping.
     */
    readonly mappingName: pulumi.Input<string>;
    /**
     * The properties of the mapping.
     */
    readonly mappingProperties: pulumi.Input<inputs.customerinsights.v20170101.ConnectorMappingProperties>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
