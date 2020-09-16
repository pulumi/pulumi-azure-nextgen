import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * The integration account schema.
 */
export declare class Schema extends pulumi.CustomResource {
    /**
     * Get an existing Schema resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Schema;
    /**
     * Returns true if the given object is an instance of Schema.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Schema;
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
    readonly contentLink: pulumi.Output<outputs.logic.v20160601.ContentLinkResponse>;
    /**
     * The content type.
     */
    readonly contentType: pulumi.Output<string | undefined>;
    /**
     * The created time.
     */
    readonly createdTime: pulumi.Output<string>;
    /**
     * The document name.
     */
    readonly documentName: pulumi.Output<string | undefined>;
    /**
     * The file name.
     */
    readonly fileName: pulumi.Output<string | undefined>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
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
     * The schema type.
     */
    readonly schemaType: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The target namespace of the schema.
     */
    readonly targetNamespace: pulumi.Output<string | undefined>;
    /**
     * Gets the resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Schema resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SchemaArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Schema resource.
 */
export interface SchemaArgs {
    /**
     * The content.
     */
    readonly content?: pulumi.Input<string>;
    /**
     * The content type.
     */
    readonly contentType?: pulumi.Input<string>;
    /**
     * The document name.
     */
    readonly documentName?: pulumi.Input<string>;
    /**
     * The file name.
     */
    readonly fileName?: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The metadata.
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The integration account schema name.
     */
    readonly schemaName: pulumi.Input<string>;
    /**
     * The schema type.
     */
    readonly schemaType: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The target namespace of the schema.
     */
    readonly targetNamespace?: pulumi.Input<string>;
}
