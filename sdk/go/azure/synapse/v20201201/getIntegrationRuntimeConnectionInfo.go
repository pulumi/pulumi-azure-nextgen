// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func GetIntegrationRuntimeConnectionInfo(ctx *pulumi.Context, args *GetIntegrationRuntimeConnectionInfoArgs, opts ...pulumi.InvokeOption) (*GetIntegrationRuntimeConnectionInfoResult, error) {
	var rv GetIntegrationRuntimeConnectionInfoResult
	err := ctx.Invoke("azure-nextgen:synapse/v20201201:getIntegrationRuntimeConnectionInfo", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type GetIntegrationRuntimeConnectionInfoArgs struct {
	// Integration runtime name
	IntegrationRuntimeName string `pulumi:"integrationRuntimeName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// Connection information for encrypting the on-premises data source credentials.
type GetIntegrationRuntimeConnectionInfoResult struct {
	// The on-premises integration runtime host URL.
	HostServiceUri string `pulumi:"hostServiceUri"`
	// The integration runtime SSL certificate thumbprint. Click-Once application uses it to do server validation.
	IdentityCertThumbprint string `pulumi:"identityCertThumbprint"`
	// Whether the identity certificate is expired.
	IsIdentityCertExprired bool `pulumi:"isIdentityCertExprired"`
	// The public key for encrypting a credential when transferring the credential to the integration runtime.
	PublicKey string `pulumi:"publicKey"`
	// The token generated in service. Callers use this token to authenticate to integration runtime.
	ServiceToken string `pulumi:"serviceToken"`
	// The integration runtime version.
	Version string `pulumi:"version"`
}
