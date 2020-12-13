// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Azure Active Directory only authentication.
type ManagedInstanceAzureADOnlyAuthentication struct {
	pulumi.CustomResourceState

	// Azure Active Directory only Authentication enabled.
	AzureADOnlyAuthentication pulumi.BoolOutput `pulumi:"azureADOnlyAuthentication"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewManagedInstanceAzureADOnlyAuthentication registers a new resource with the given unique name, arguments, and options.
func NewManagedInstanceAzureADOnlyAuthentication(ctx *pulumi.Context,
	name string, args *ManagedInstanceAzureADOnlyAuthenticationArgs, opts ...pulumi.ResourceOption) (*ManagedInstanceAzureADOnlyAuthentication, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AuthenticationName == nil {
		return nil, errors.New("invalid value for required argument 'AuthenticationName'")
	}
	if args.AzureADOnlyAuthentication == nil {
		return nil, errors.New("invalid value for required argument 'AzureADOnlyAuthentication'")
	}
	if args.ManagedInstanceName == nil {
		return nil, errors.New("invalid value for required argument 'ManagedInstanceName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/v20200202preview:ManagedInstanceAzureADOnlyAuthentication"),
		},
	})
	opts = append(opts, aliases)
	var resource ManagedInstanceAzureADOnlyAuthentication
	err := ctx.RegisterResource("azure-nextgen:sql/v20200801preview:ManagedInstanceAzureADOnlyAuthentication", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetManagedInstanceAzureADOnlyAuthentication gets an existing ManagedInstanceAzureADOnlyAuthentication resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetManagedInstanceAzureADOnlyAuthentication(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ManagedInstanceAzureADOnlyAuthenticationState, opts ...pulumi.ResourceOption) (*ManagedInstanceAzureADOnlyAuthentication, error) {
	var resource ManagedInstanceAzureADOnlyAuthentication
	err := ctx.ReadResource("azure-nextgen:sql/v20200801preview:ManagedInstanceAzureADOnlyAuthentication", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ManagedInstanceAzureADOnlyAuthentication resources.
type managedInstanceAzureADOnlyAuthenticationState struct {
	// Azure Active Directory only Authentication enabled.
	AzureADOnlyAuthentication *bool `pulumi:"azureADOnlyAuthentication"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type ManagedInstanceAzureADOnlyAuthenticationState struct {
	// Azure Active Directory only Authentication enabled.
	AzureADOnlyAuthentication pulumi.BoolPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (ManagedInstanceAzureADOnlyAuthenticationState) ElementType() reflect.Type {
	return reflect.TypeOf((*managedInstanceAzureADOnlyAuthenticationState)(nil)).Elem()
}

type managedInstanceAzureADOnlyAuthenticationArgs struct {
	// The name of server azure active directory only authentication.
	AuthenticationName string `pulumi:"authenticationName"`
	// Azure Active Directory only Authentication enabled.
	AzureADOnlyAuthentication bool `pulumi:"azureADOnlyAuthentication"`
	// The name of the managed instance.
	ManagedInstanceName string `pulumi:"managedInstanceName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a ManagedInstanceAzureADOnlyAuthentication resource.
type ManagedInstanceAzureADOnlyAuthenticationArgs struct {
	// The name of server azure active directory only authentication.
	AuthenticationName pulumi.StringInput
	// Azure Active Directory only Authentication enabled.
	AzureADOnlyAuthentication pulumi.BoolInput
	// The name of the managed instance.
	ManagedInstanceName pulumi.StringInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
}

func (ManagedInstanceAzureADOnlyAuthenticationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*managedInstanceAzureADOnlyAuthenticationArgs)(nil)).Elem()
}

type ManagedInstanceAzureADOnlyAuthenticationInput interface {
	pulumi.Input

	ToManagedInstanceAzureADOnlyAuthenticationOutput() ManagedInstanceAzureADOnlyAuthenticationOutput
	ToManagedInstanceAzureADOnlyAuthenticationOutputWithContext(ctx context.Context) ManagedInstanceAzureADOnlyAuthenticationOutput
}

func (ManagedInstanceAzureADOnlyAuthentication) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagedInstanceAzureADOnlyAuthentication)(nil)).Elem()
}

func (i ManagedInstanceAzureADOnlyAuthentication) ToManagedInstanceAzureADOnlyAuthenticationOutput() ManagedInstanceAzureADOnlyAuthenticationOutput {
	return i.ToManagedInstanceAzureADOnlyAuthenticationOutputWithContext(context.Background())
}

func (i ManagedInstanceAzureADOnlyAuthentication) ToManagedInstanceAzureADOnlyAuthenticationOutputWithContext(ctx context.Context) ManagedInstanceAzureADOnlyAuthenticationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ManagedInstanceAzureADOnlyAuthenticationOutput)
}

type ManagedInstanceAzureADOnlyAuthenticationOutput struct {
	*pulumi.OutputState
}

func (ManagedInstanceAzureADOnlyAuthenticationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagedInstanceAzureADOnlyAuthenticationOutput)(nil)).Elem()
}

func (o ManagedInstanceAzureADOnlyAuthenticationOutput) ToManagedInstanceAzureADOnlyAuthenticationOutput() ManagedInstanceAzureADOnlyAuthenticationOutput {
	return o
}

func (o ManagedInstanceAzureADOnlyAuthenticationOutput) ToManagedInstanceAzureADOnlyAuthenticationOutputWithContext(ctx context.Context) ManagedInstanceAzureADOnlyAuthenticationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ManagedInstanceAzureADOnlyAuthenticationOutput{})
}
