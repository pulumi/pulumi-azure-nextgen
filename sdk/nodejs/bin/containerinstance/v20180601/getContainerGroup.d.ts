import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getContainerGroup(args: GetContainerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerGroupResult>;
export interface GetContainerGroupArgs {
    /**
     * The name of the container group.
     */
    readonly containerGroupName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * A container group.
 */
export interface GetContainerGroupResult {
    /**
     * The containers within the container group.
     */
    readonly containers: outputs.containerinstance.v20180601.ContainerResponse[];
    /**
     * The diagnostic information for a container group.
     */
    readonly diagnostics?: outputs.containerinstance.v20180601.ContainerGroupDiagnosticsResponse;
    /**
     * The image registry credentials by which the container group is created from.
     */
    readonly imageRegistryCredentials?: outputs.containerinstance.v20180601.ImageRegistryCredentialResponse[];
    /**
     * The instance view of the container group. Only valid in response.
     */
    readonly instanceView: outputs.containerinstance.v20180601.ContainerGroupResponseInstanceView;
    /**
     * The IP address type of the container group.
     */
    readonly ipAddress?: outputs.containerinstance.v20180601.IpAddressResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The operating system type required by the containers in the container group.
     */
    readonly osType: string;
    /**
     * The provisioning state of the container group. This only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Restart policy for all containers within the container group.
     * - `Always` Always restart
     * - `OnFailure` Restart on failure
     * - `Never` Never restart
     */
    readonly restartPolicy?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The resource type.
     */
    readonly type: string;
    /**
     * The list of volumes that can be mounted by containers in this container group.
     */
    readonly volumes?: outputs.containerinstance.v20180601.VolumeResponse[];
}
