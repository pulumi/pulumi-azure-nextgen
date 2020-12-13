// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * A notebook workspace resource
 */
export class NotebookWorkspace extends pulumi.CustomResource {
    /**
     * Get an existing NotebookWorkspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NotebookWorkspace {
        return new NotebookWorkspace(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:documentdb/v20200301:NotebookWorkspace';

    /**
     * Returns true if the given object is an instance of NotebookWorkspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotebookWorkspace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotebookWorkspace.__pulumiType;
    }

    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the endpoint of Notebook server.
     */
    public /*out*/ readonly notebookServerEndpoint!: pulumi.Output<string>;
    /**
     * Status of the notebook workspace. Possible values are: Creating, Online, Deleting, Failed, Updating.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NotebookWorkspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotebookWorkspaceArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.notebookWorkspaceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'notebookWorkspaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["notebookWorkspaceName"] = args ? args.notebookWorkspaceName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["notebookServerEndpoint"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["name"] = undefined /*out*/;
            inputs["notebookServerEndpoint"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:documentdb/latest:NotebookWorkspace" }, { type: "azure-nextgen:documentdb/v20190801:NotebookWorkspace" }, { type: "azure-nextgen:documentdb/v20191212:NotebookWorkspace" }, { type: "azure-nextgen:documentdb/v20200401:NotebookWorkspace" }, { type: "azure-nextgen:documentdb/v20200601preview:NotebookWorkspace" }, { type: "azure-nextgen:documentdb/v20200901:NotebookWorkspace" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(NotebookWorkspace.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a NotebookWorkspace resource.
 */
export interface NotebookWorkspaceArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The name of the notebook workspace resource.
     */
    readonly notebookWorkspaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
