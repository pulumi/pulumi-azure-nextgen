import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Instance of an Azure ML web service resource.
 */
export declare class WebService extends pulumi.CustomResource {
    /**
     * Get an existing WebService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebService;
    /**
     * Returns true if the given object is an instance of WebService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebService;
    /**
     * Specifies the location of the resource.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Contains the property payload that describes the web service.
     */
    readonly properties: pulumi.Output<outputs.machinelearning.v20170101.WebServicePropertiesResponse>;
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
     * Create a WebService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebService resource.
 */
export interface WebServiceArgs {
    /**
     * Specifies the location of the resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Contains the property payload that describes the web service.
     */
    readonly properties: pulumi.Input<inputs.machinelearning.v20170101.WebServiceProperties>;
    /**
     * Name of the resource group in which the web service is located.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the web service.
     */
    readonly webServiceName: pulumi.Input<string>;
}
