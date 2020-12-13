// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupContainerGroup(ctx *pulumi.Context, args *LookupContainerGroupArgs, opts ...pulumi.InvokeOption) (*LookupContainerGroupResult, error) {
	var rv LookupContainerGroupResult
	err := ctx.Invoke("azure-nextgen:containerinstance/v20191201:getContainerGroup", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupContainerGroupArgs struct {
	// The name of the container group.
	ContainerGroupName string `pulumi:"containerGroupName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A container group.
type LookupContainerGroupResult struct {
	// The containers within the container group.
	Containers []ContainerResponse `pulumi:"containers"`
	// The diagnostic information for a container group.
	Diagnostics *ContainerGroupDiagnosticsResponse `pulumi:"diagnostics"`
	// The DNS config information for a container group.
	DnsConfig *DnsConfigurationResponse `pulumi:"dnsConfig"`
	// The encryption properties for a container group.
	EncryptionProperties *EncryptionPropertiesResponse `pulumi:"encryptionProperties"`
	// The resource id.
	Id string `pulumi:"id"`
	// The identity of the container group, if configured.
	Identity *ContainerGroupIdentityResponse `pulumi:"identity"`
	// The image registry credentials by which the container group is created from.
	ImageRegistryCredentials []ImageRegistryCredentialResponse `pulumi:"imageRegistryCredentials"`
	// The init containers for a container group.
	InitContainers []InitContainerDefinitionResponse `pulumi:"initContainers"`
	// The instance view of the container group. Only valid in response.
	InstanceView ContainerGroupResponseInstanceView `pulumi:"instanceView"`
	// The IP address type of the container group.
	IpAddress *IpAddressResponse `pulumi:"ipAddress"`
	// The resource location.
	Location *string `pulumi:"location"`
	// The resource name.
	Name string `pulumi:"name"`
	// The network profile information for a container group.
	NetworkProfile *ContainerGroupNetworkProfileResponse `pulumi:"networkProfile"`
	// The operating system type required by the containers in the container group.
	OsType string `pulumi:"osType"`
	// The provisioning state of the container group. This only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Restart policy for all containers within the container group.
	// - `Always` Always restart
	// - `OnFailure` Restart on failure
	// - `Never` Never restart
	RestartPolicy *string `pulumi:"restartPolicy"`
	// The SKU for a container group.
	Sku *string `pulumi:"sku"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The resource type.
	Type string `pulumi:"type"`
	// The list of volumes that can be mounted by containers in this container group.
	Volumes []VolumeResponse `pulumi:"volumes"`
}
