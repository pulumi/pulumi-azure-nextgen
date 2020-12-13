// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200214privatepreview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupServerKey(ctx *pulumi.Context, args *LookupServerKeyArgs, opts ...pulumi.InvokeOption) (*LookupServerKeyResult, error) {
	var rv LookupServerKeyResult
	err := ctx.Invoke("azure-nextgen:dbforpostgresql/v20200214privatepreview:getServerKey", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupServerKeyArgs struct {
	// The name of the PostgreSQL Server key to be retrieved.
	KeyName string `pulumi:"keyName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
}

// A PostgreSQL Server key.
type LookupServerKeyResult struct {
	// The key creation date.
	CreationDate string `pulumi:"creationDate"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// Kind of encryption protector used to protect the key.
	Kind string `pulumi:"kind"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The key type like 'AzureKeyVault'.
	ServerKeyType string `pulumi:"serverKeyType"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
	// The URI of the key.
	Uri *string `pulumi:"uri"`
}
