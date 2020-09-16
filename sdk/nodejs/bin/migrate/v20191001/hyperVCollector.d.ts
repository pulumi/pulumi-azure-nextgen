import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
export declare class HyperVCollector extends pulumi.CustomResource {
    /**
     * Get an existing HyperVCollector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HyperVCollector;
    /**
     * Returns true if the given object is an instance of HyperVCollector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HyperVCollector;
    readonly eTag: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    readonly properties: pulumi.Output<outputs.migrate.v20191001.CollectorPropertiesResponse>;
    readonly type: pulumi.Output<string>;
    /**
     * Create a HyperVCollector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HyperVCollectorArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a HyperVCollector resource.
 */
export interface HyperVCollectorArgs {
    readonly eTag?: pulumi.Input<string>;
    /**
     * Unique name of a Hyper-V collector within a project.
     */
    readonly hyperVCollectorName: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    readonly projectName: pulumi.Input<string>;
    readonly properties?: pulumi.Input<inputs.migrate.v20191001.CollectorProperties>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
