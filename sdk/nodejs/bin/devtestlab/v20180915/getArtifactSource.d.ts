import * as pulumi from "@pulumi/pulumi";
export declare function getArtifactSource(args: GetArtifactSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetArtifactSourceResult>;
export interface GetArtifactSourceArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=displayName)'
     */
    readonly expand?: string;
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the artifact source.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Properties of an artifact source.
 */
export interface GetArtifactSourceResult {
    /**
     * The folder containing Azure Resource Manager templates.
     */
    readonly armTemplateFolderPath?: string;
    /**
     * The artifact source's branch reference.
     */
    readonly branchRef?: string;
    /**
     * The artifact source's creation date.
     */
    readonly createdDate: string;
    /**
     * The artifact source's display name.
     */
    readonly displayName?: string;
    /**
     * The folder containing artifacts.
     */
    readonly folderPath?: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The security token to authenticate to the artifact source.
     */
    readonly securityToken?: string;
    /**
     * The artifact source's type.
     */
    readonly sourceType?: string;
    /**
     * Indicates if the artifact source is enabled (values: Enabled, Disabled).
     */
    readonly status?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
    /**
     * The artifact source's URI.
     */
    readonly uri?: string;
}
