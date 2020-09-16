import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The integration account map.
 */
export declare class IntegrationAccountMap extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationAccountMap;
    /**
     * Returns true if the given object is an instance of IntegrationAccountMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationAccountMap;
    /**
     * The changed time.
     */
    readonly changedTime: pulumi.Output<string>;
    /**
     * The content.
     */
    readonly content: pulumi.Output<string | undefined>;
    /**
     * The content link.
     */
    readonly contentLink: pulumi.Output<outputs.logic.v20190501.ContentLinkResponse>;
    /**
     * The content type.
     */
    readonly contentType: pulumi.Output<string | undefined>;
    /**
     * The created time.
     */
    readonly createdTime: pulumi.Output<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The map type.
     */
    readonly mapType: pulumi.Output<string>;
    /**
     * The metadata.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Gets the resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The parameters schema of integration account map.
     */
    readonly parametersSchema: pulumi.Output<outputs.logic.v20190501.IntegrationAccountMapPropertiesResponseParametersSchema | undefined>;
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
     * Create a IntegrationAccountMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountMapArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a IntegrationAccountMap resource.
 */
export interface IntegrationAccountMapArgs {
    /**
     * The content.
     */
    readonly content?: pulumi.Input<string>;
    /**
     * The content type.
     */
    readonly contentType?: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The integration account map name.
     */
    readonly mapName: pulumi.Input<string>;
    /**
     * The map type.
     */
    readonly mapType: pulumi.Input<string>;
    /**
     * The metadata.
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The parameters schema of integration account map.
     */
    readonly parametersSchema?: pulumi.Input<inputs.logic.v20190501.IntegrationAccountMapPropertiesParametersSchema>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
