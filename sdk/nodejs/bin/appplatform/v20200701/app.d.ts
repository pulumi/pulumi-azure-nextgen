import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * App resource payload
 */
export declare class App extends pulumi.CustomResource {
    /**
     * Get an existing App resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): App;
    /**
     * Returns true if the given object is an instance of App.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is App;
    /**
     * The Managed Identity type of the app resource
     */
    readonly identity: pulumi.Output<outputs.appplatform.v20200701.ManagedIdentityPropertiesResponse | undefined>;
    /**
     * The GEO location of the application, always the same with its parent resource
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Properties of the App resource
     */
    readonly properties: pulumi.Output<outputs.appplatform.v20200701.AppResourcePropertiesResponse>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a App resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a App resource.
 */
export interface AppArgs {
    /**
     * The name of the App resource.
     */
    readonly appName: pulumi.Input<string>;
    /**
     * The Managed Identity type of the app resource
     */
    readonly identity?: pulumi.Input<inputs.appplatform.v20200701.ManagedIdentityProperties>;
    /**
     * The GEO location of the application, always the same with its parent resource
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Properties of the App resource
     */
    readonly properties?: pulumi.Input<inputs.appplatform.v20200701.AppResourceProperties>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    readonly serviceName: pulumi.Input<string>;
}
