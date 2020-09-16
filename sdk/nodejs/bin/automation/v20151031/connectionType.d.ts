import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Definition of the connection type.
 */
export declare class ConnectionType extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectionType;
    /**
     * Returns true if the given object is an instance of ConnectionType.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectionType;
    /**
     * Gets the creation time.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * Gets or sets the description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Gets the field definitions of the connection type.
     */
    readonly fieldDefinitions: pulumi.Output<{
        [key: string]: outputs.automation.v20151031.FieldDefinitionResponse;
    }>;
    /**
     * Gets or sets a Boolean value to indicate if the connection type is global.
     */
    readonly isGlobal: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string | undefined>;
    /**
     * Gets the name of the connection type.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ConnectionType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionTypeArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ConnectionType resource.
 */
export interface ConnectionTypeArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * The parameters supplied to the create or update connection type operation.
     */
    readonly connectionTypeName: pulumi.Input<string>;
    /**
     * Gets or sets the field definitions of the connection type.
     */
    readonly fieldDefinitions: pulumi.Input<{
        [key: string]: pulumi.Input<inputs.automation.v20151031.FieldDefinition>;
    }>;
    /**
     * Gets or sets a Boolean value to indicate if the connection type is global.
     */
    readonly isGlobal?: pulumi.Input<boolean>;
    /**
     * Gets or sets the name of the connection type.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
