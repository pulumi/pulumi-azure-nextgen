// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupApiManagementService(ctx *pulumi.Context, args *LookupApiManagementServiceArgs, opts ...pulumi.InvokeOption) (*LookupApiManagementServiceResult, error) {
	var rv LookupApiManagementServiceResult
	err := ctx.Invoke("azure-nextgen:apimanagement/v20180601preview:getApiManagementService", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupApiManagementServiceArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// A single API Management service resource in List or Get response.
type LookupApiManagementServiceResult struct {
	// Additional datacenter locations of the API Management service.
	AdditionalLocations []AdditionalLocationResponse `pulumi:"additionalLocations"`
	// List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
	Certificates []CertificateConfigurationResponse `pulumi:"certificates"`
	// Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
	CreatedAtUtc string `pulumi:"createdAtUtc"`
	// Custom properties of the API Management service. Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2). Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1 and setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.
	CustomProperties map[string]string `pulumi:"customProperties"`
	// ETag of the resource.
	Etag string `pulumi:"etag"`
	// Gateway URL of the API Management service in the Default Region.
	GatewayRegionalUrl string `pulumi:"gatewayRegionalUrl"`
	// Gateway URL of the API Management service.
	GatewayUrl string `pulumi:"gatewayUrl"`
	// Custom hostname configuration of the API Management service.
	HostnameConfigurations []HostnameConfigurationResponse `pulumi:"hostnameConfigurations"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Managed service identity of the Api Management service.
	Identity *ApiManagementServiceIdentityResponse `pulumi:"identity"`
	// Resource location.
	Location string `pulumi:"location"`
	// Management API endpoint URL of the API Management service.
	ManagementApiUrl string `pulumi:"managementApiUrl"`
	// Resource name.
	Name string `pulumi:"name"`
	// Email address from which the notification will be sent.
	NotificationSenderEmail *string `pulumi:"notificationSenderEmail"`
	// Publisher portal endpoint Url of the API Management service.
	PortalUrl string `pulumi:"portalUrl"`
	// Private Static Load Balanced IP addresses of the API Management service in Primary region which is deployed in an Internal Virtual Network. Available only for Basic, Standard and Premium SKU.
	PrivateIPAddresses []string `pulumi:"privateIPAddresses"`
	// The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
	ProvisioningState string `pulumi:"provisioningState"`
	// Public Static Load Balanced IP addresses of the API Management service in Primary region. Available only for Basic, Standard and Premium SKU.
	PublicIPAddresses []string `pulumi:"publicIPAddresses"`
	// Publisher email.
	PublisherEmail string `pulumi:"publisherEmail"`
	// Publisher name.
	PublisherName string `pulumi:"publisherName"`
	// SCM endpoint URL of the API Management service.
	ScmUrl string `pulumi:"scmUrl"`
	// SKU properties of the API Management service.
	Sku ApiManagementServiceSkuPropertiesResponse `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
	TargetProvisioningState string `pulumi:"targetProvisioningState"`
	// Resource type for API Management resource is set to Microsoft.ApiManagement.
	Type string `pulumi:"type"`
	// Virtual network configuration of the API Management service.
	VirtualNetworkConfiguration *VirtualNetworkConfigurationResponse `pulumi:"virtualNetworkConfiguration"`
	// The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
	VirtualNetworkType *string `pulumi:"virtualNetworkType"`
}
