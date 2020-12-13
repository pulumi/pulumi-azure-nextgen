// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20151031

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Definition of the credential.
type Credential struct {
	pulumi.CustomResourceState

	// Gets the creation time.
	CreationTime pulumi.StringOutput `pulumi:"creationTime"`
	// Gets or sets the description.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Gets the last modified time.
	LastModifiedTime pulumi.StringOutput `pulumi:"lastModifiedTime"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// Gets the user name of the credential.
	UserName pulumi.StringOutput `pulumi:"userName"`
}

// NewCredential registers a new resource with the given unique name, arguments, and options.
func NewCredential(ctx *pulumi.Context,
	name string, args *CredentialArgs, opts ...pulumi.ResourceOption) (*Credential, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AutomationAccountName == nil {
		return nil, errors.New("invalid value for required argument 'AutomationAccountName'")
	}
	if args.CredentialName == nil {
		return nil, errors.New("invalid value for required argument 'CredentialName'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.Password == nil {
		return nil, errors.New("invalid value for required argument 'Password'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.UserName == nil {
		return nil, errors.New("invalid value for required argument 'UserName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:automation/latest:Credential"),
		},
	})
	opts = append(opts, aliases)
	var resource Credential
	err := ctx.RegisterResource("azure-nextgen:automation/v20151031:Credential", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCredential gets an existing Credential resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCredential(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CredentialState, opts ...pulumi.ResourceOption) (*Credential, error) {
	var resource Credential
	err := ctx.ReadResource("azure-nextgen:automation/v20151031:Credential", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Credential resources.
type credentialState struct {
	// Gets the creation time.
	CreationTime *string `pulumi:"creationTime"`
	// Gets or sets the description.
	Description *string `pulumi:"description"`
	// Gets the last modified time.
	LastModifiedTime *string `pulumi:"lastModifiedTime"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The type of the resource.
	Type *string `pulumi:"type"`
	// Gets the user name of the credential.
	UserName *string `pulumi:"userName"`
}

type CredentialState struct {
	// Gets the creation time.
	CreationTime pulumi.StringPtrInput
	// Gets or sets the description.
	Description pulumi.StringPtrInput
	// Gets the last modified time.
	LastModifiedTime pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
	// Gets the user name of the credential.
	UserName pulumi.StringPtrInput
}

func (CredentialState) ElementType() reflect.Type {
	return reflect.TypeOf((*credentialState)(nil)).Elem()
}

type credentialArgs struct {
	// The name of the automation account.
	AutomationAccountName string `pulumi:"automationAccountName"`
	// The parameters supplied to the create or update credential operation.
	CredentialName string `pulumi:"credentialName"`
	// Gets or sets the description of the credential.
	Description *string `pulumi:"description"`
	// Gets or sets the name of the credential.
	Name string `pulumi:"name"`
	// Gets or sets the password of the credential.
	Password string `pulumi:"password"`
	// Name of an Azure Resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Gets or sets the user name of the credential.
	UserName string `pulumi:"userName"`
}

// The set of arguments for constructing a Credential resource.
type CredentialArgs struct {
	// The name of the automation account.
	AutomationAccountName pulumi.StringInput
	// The parameters supplied to the create or update credential operation.
	CredentialName pulumi.StringInput
	// Gets or sets the description of the credential.
	Description pulumi.StringPtrInput
	// Gets or sets the name of the credential.
	Name pulumi.StringInput
	// Gets or sets the password of the credential.
	Password pulumi.StringInput
	// Name of an Azure Resource group.
	ResourceGroupName pulumi.StringInput
	// Gets or sets the user name of the credential.
	UserName pulumi.StringInput
}

func (CredentialArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*credentialArgs)(nil)).Elem()
}

type CredentialInput interface {
	pulumi.Input

	ToCredentialOutput() CredentialOutput
	ToCredentialOutputWithContext(ctx context.Context) CredentialOutput
}

func (Credential) ElementType() reflect.Type {
	return reflect.TypeOf((*Credential)(nil)).Elem()
}

func (i Credential) ToCredentialOutput() CredentialOutput {
	return i.ToCredentialOutputWithContext(context.Background())
}

func (i Credential) ToCredentialOutputWithContext(ctx context.Context) CredentialOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CredentialOutput)
}

type CredentialOutput struct {
	*pulumi.OutputState
}

func (CredentialOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*CredentialOutput)(nil)).Elem()
}

func (o CredentialOutput) ToCredentialOutput() CredentialOutput {
	return o
}

func (o CredentialOutput) ToCredentialOutputWithContext(ctx context.Context) CredentialOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(CredentialOutput{})
}
